"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/UserContext";

export default function BlogPostForm() {
  const router = useRouter();
  const { user } = useUser();

  const [form, setForm] = useState({ title: "", content: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({
    text: "",
    type: "",
  });
  const [justSignedIn, setJustSignedIn] = useState(false);

  
  useEffect(() => {
    if (user) {
      setJustSignedIn(true);
      
      const timer = setTimeout(() => setJustSignedIn(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [user]);


  if (!user) {
    return (
      <p className="text-red-500 text-2xl md:text-4xl text-center pt-20 md:pt-40 px-4">
        You must be signed in to create a post.
      </p>
    );
  }

  if (justSignedIn) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-green-50 rounded shadow mt-10 text-center">
        <h2 className="text-2xl font-bold text-green-700">Welcome back, {user.name} </h2>
        <p className="text-green-600 mt-2">You have successfully signed in</p>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("authorId", user?.id || "");
      formData.append("authorName", user?.name || "");
      if (imageFile) formData.append("image", imageFile);

      const res = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to create post");
      }

      setMessage({ text: "Post created successfully!", type: "success" });
      setForm({ title: "", content: "" });
      setImageFile(null);

      router.push("/posts");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage({ text: err.message, type: "error" });
      } else {
        setMessage({ text: "An unexpected error occurred", type: "error" });
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 bg-white rounded shadow mt-10">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Create a Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Write your post..."
          value={form.content}
          onChange={handleChange}
          className="w-full p-2 border rounded h-40"
          required
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
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
