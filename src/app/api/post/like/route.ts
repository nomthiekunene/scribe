import { NextResponse } from "next/server";
import connect from "../../../../../db";
import post from "../../../../../models/post";

export const POST = async (request: Request) => {
  try {
    await connect();

    const { postId, userId } = await request.json();

    if (!postId || !userId) {
      return new NextResponse("Post ID and User ID are required", { status: 400 });
    }

    const foundPost = await post.findById(postId);
    if (!foundPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const isLiked = foundPost.likes.includes(userId);
    if (isLiked) {
      
      foundPost.likes = foundPost.likes.filter((id: string) => id !== userId);
    } else {
      
      foundPost.likes.push(userId);
    }

    await foundPost.save();

    return new NextResponse(JSON.stringify({
      message: isLiked ? 'Post unliked' : 'Post liked',
      likesCount: foundPost.likes.length
    }), { status: 200 });
  } catch (error) {
    console.error('Error toggling like:', error);
    return new NextResponse("Failed to toggle like: " + error, { status: 500 });
  }
};