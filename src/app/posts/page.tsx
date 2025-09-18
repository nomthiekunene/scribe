"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

export default function BlogPostForm() {
  const router = useRouter();
  const { user } = useUser();

  const [form, setForm] = useState({ title: "", content: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  if (!user)
    return <p className="text-red-500 text-4xl text-center pt-40">You must be signed in to create a post.</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("authorId", user.id);
      formData.append("authorName", user.name);
      if (imageFile) formData.append("image", imageFile);

      const res = await fetch("/api/post", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to create post");
      }

      setMessage("Post created successfully!");
      setForm({ title: "", content: "" });
      setImageFile(null);

      router.push("/"); // redirect to homepage
    } catch (err: unknown) {
      if (err instanceof Error) setMessage(err.message);
      else setMessage("An unexpected error occurred");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">Create a Blog Post</h2>
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
        <input type="file" accept="image/*" onChange={handleFileChange}  />
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500"
        > 
          Submit
        </button>
      </form>
      {message && <p className="mt-3 text-green-500">{message}</p>}
    </div>
  );
}
