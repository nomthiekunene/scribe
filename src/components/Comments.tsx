"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "./UserContext";

interface Comment {
  _id: string;
  authorName: string;
  content: string;
  date: string;
}

interface CommentsProps {
  postId: string;
  imageUrl?: string;
  title?: string;
}

export default function Comments({ postId, imageUrl, title = "Comments" }: CommentsProps) {
  const { user } = useUser();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({
    text: "",
    type: "",
  });

  const fetchComments = useCallback(async () => {
    try {
      const url = `/api/comment?postId=${postId}${imageUrl ? `&imageUrl=${encodeURIComponent(imageUrl)}` : ''}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch {
      console.error("Failed to fetch comments");
    }
  }, [postId, imageUrl]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId,
          authorId: user.id,
          authorName: user.name,
          content: newComment.trim(),
          imageUrl,
        }),
      });

      if (res.ok) {
        setMessage({ text: "Comment added successfully!", type: "success" });
        setNewComment("");
        fetchComments(); 
      } else {
        setMessage({ text: "Failed to add comment", type: "error" });
      }
    } catch {
      setMessage({ text: "An error occurred", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4 mb-6">
          {comments.map((comment) => (
            <div key={comment._id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <strong>{comment.authorName}</strong>
                <span className="text-sm text-gray-500">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}

      {user ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded h-20"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </form>
      ) : (
        <p className="text-gray-500">You must be signed in to comment.</p>
      )}

      {message.text && (
        <p
          className={`mt-3 ${
            message.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}