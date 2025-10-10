"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Comments from "@/components/Comments";
import { useUser } from "@/components/UserContext";

interface Post {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  date: string;
  likes: string[];
}

export default function PostPage() {
  const { id } = useParams();
  const { user } = useUser();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const fetchPost = useCallback(async () => {
    try {
      const res = await fetch("/api/post");
      if (res.ok) {
        const posts: Post[] = await res.json();
        const foundPost = posts.find((p) => p._id === id);
        if (foundPost) {
          setPost(foundPost);
          setLikesCount(foundPost.likes.length);
          setIsLiked(user ? foundPost.likes.includes(user.id) : false);
        } else {
          setError("Post not found");
        }
      } else {
        setError("Failed to fetch post");
      }
    } catch {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  }, [id, user]);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id, fetchPost]);

  const handleLike = async () => {
    if (!user || !post) return;

    try {
      const res = await fetch("/api/post/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: post._id,
          userId: user.id,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setLikesCount(data.likesCount);
        setIsLiked(!isLiked);
      }
    } catch (error) {
      console.error("Failed to toggle like:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="text-center mt-20">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 mt-10">
      <article>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-4">{post.subtitle}</h2>
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover mb-6 rounded"
          />
        )}
        <p className="text-gray-500 mb-6">
          Published on {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleLike}
            disabled={!user}
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isLiked
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span>{isLiked ? "❤️" : "🤍"}</span>
            <span>{likesCount} {likesCount === 1 ? "Like" : "Likes"}</span>
          </button>
          {!user && <span className="text-sm text-gray-500">Sign in to like posts</span>}
        </div>
        <div className="prose prose-lg max-w-none mb-6">
          <p>{post.description}</p>
        </div>
        {post.imageUrl && (
          <div className="mb-6">
            <Comments postId={post._id} imageUrl={post.imageUrl} title="Comments on Image" />
          </div>
        )}
      </article>

      <div id="comments">
        <Comments postId={post._id} />
      </div>
    </div>
  );
}