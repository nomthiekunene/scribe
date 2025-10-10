"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { useUser } from "./UserContext";

interface Post {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  date: string;
  likes: string[];
  commentCount: number;
}

export default function ArticlesList() {
  const { user } = useUser();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/post");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        setError("Failed to fetch articles");
      }
    } catch {
      setError("An error occurred while fetching articles");
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (postId: string) => {
    if (!user) return;

    
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post._id === postId) {
          const isLiked = post.likes.includes(user.id);
          const newLikes = isLiked
            ? post.likes.filter((id) => id !== user.id)
            : [...post.likes, user.id];
          return { ...post, likes: newLikes };
        }
        return post;
      })
    );

    try {
      const res = await fetch("/api/post/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          userId: user.id,
        }),
      });

      if (!res.ok) {
        
        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post._id === postId) {
              const isLiked = post.likes.includes(user.id);
              const newLikes = isLiked
                ? post.likes.filter((id) => id !== user.id)
                : [...post.likes, user.id];
              return { ...post, likes: newLikes };
            }
            return post;
          })
        );
      }
    } catch (error) {
      console.error("Failed to toggle like:", error);
     
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post._id === postId) {
            const isLiked = post.likes.includes(user.id);
            const newLikes = isLiked
              ? post.likes.filter((id) => id !== user.id)
              : [...post.likes, user.id];
            return { ...post, likes: newLikes };
          }
          return post;
        })
      );
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-white">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-20 text-white">No articles available yet.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post._id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {post.imageUrl && (
              <div className="aspect-video overflow-hidden">
                <CldImage
                  width="400"
                  height="250"
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                <Link href={`/posts/${post._id}`} className="hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <h3 className="text-lg text-gray-300 mb-3 line-clamp-1">{post.subtitle}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => handleLike(post._id)}
                    disabled={!user}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                      user && post.likes.includes(user.id)
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <span>{user && post.likes.includes(user.id) ? "❤️" : "🤍"}</span>
                    <span>{post.likes.length}</span>
                  </button>
                  <Link href={`/posts/${post._id}#comments`} className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-gray-200 text-gray-700 hover:bg-gray-300">
                    <span>💬</span>
                    <span>{post.commentCount}</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}