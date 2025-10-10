import { NextResponse } from "next/server";
import connect from "../../../../db";
import comment from "../../../../models/comment";

export const GET = async (request: Request) => {
  try {
    await connect();
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');
    const imageUrl = searchParams.get('imageUrl');

    if (!postId) {
      return new NextResponse("Post ID is required", { status: 400 });
    }

    const query: { postId: string; imageUrl?: string } = { postId };
    if (imageUrl) {
      query.imageUrl = imageUrl;
    }

    const comments = await comment.find(query).sort({ date: -1 });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse("Could not fetch comments: " + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    await connect();

    const { postId, authorId, authorName, content, imageUrl } = await request.json();

    if (!postId || !authorId || !authorName || !content) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    const newComment = new comment({
      postId,
      authorId,
      authorName,
      content,
      imageUrl
    });

    await newComment.save();

    return new NextResponse(JSON.stringify({ message: 'Comment added successfully', comment: newComment }), { status: 201 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return new NextResponse("Failed to add comment: " + error, { status: 500 });
  }
};