"use client";

import React from 'react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '@/components/Navbar';



export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add sign-in API logic here
    console.log({ email, password });
    router.push("/dashboard"); // Redirect after login
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96 h-96 mt-40 ml-[35rem] flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-emerald-300 text-black py-3 rounded-lg hover:bg-emerald-600 transition"
        >
          Sign In
        </button>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-emerald-600 font-medium">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
