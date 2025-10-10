import { NextResponse } from "next/server";
import connect from "../../../../db";
import post from "../../../../models/post";
import comment from "../../../../models/comment";
import { v2 as cloudinary } from 'cloudinary';

interface PostData {
  subtitle: string;
  title: string;
  description: string;
  imageUrl?: string;
}


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const GET = async () => {
    try {
        await connect();
        const posts = await post.find().sort({ date: -1 });
        const postsWithCommentCount = await Promise.all(
            posts.map(async (p) => {
                const commentCount = await comment.countDocuments({ postId: p._id });
                return {
                    ...p.toObject(),
                    commentCount
                };
            })
        );
        return new NextResponse(JSON.stringify(postsWithCommentCount), {status: 200});
    }
    catch (error) {
        return new NextResponse("Could not connect" + error, {status: 500});

    }
}

export const POST = async (request: Request) => {
    try {
        await connect();

        const formData = await request.formData();
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const imageFile = formData.get('image') as File;

        let imageUrl = '';
        if (imageFile) {
            const buffer = await imageFile.arrayBuffer();
            const base64 = Buffer.from(buffer).toString('base64');
            const dataURI = `data:${imageFile.type};base64,${base64}`;

            const uploadResponse = await cloudinary.uploader.upload(dataURI, {
                folder: 'blog-posts',
            });
            imageUrl = uploadResponse.secure_url;
        }

        
        const postData: PostData = {
            subtitle: title,
            title,
            description: content,
        };
        if (imageUrl) {
            postData.imageUrl = imageUrl;
        }
        const newPost = new post(postData);

        await newPost.save();

        return new NextResponse(JSON.stringify({ message: 'Post created successfully', post: newPost }), { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return new NextResponse("Failed to create post: " + error, { status: 500 });
    }
}