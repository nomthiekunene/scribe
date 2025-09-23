import React from "react";
import { notFound } from "next/navigation";

interface Post{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  imageUrl?: string;
}

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/post',{cache:'no-store'});
   if(!res.ok) return notFound()
    return res.json()
}
 
const Welcome = async () => {
   const data = await getData();
   const posts:Post[]=Array.isArray(data)? data: data.posts || []


  return (
    <div className="bg-black py-10 md:py-20">
      <div className="border-b-2 border-white pb-14 w-[100%] md:w-[80%] mx-auto">
        <h1 className="text-white text-4xl sm:text-3xl md:text-4xl font-[Sentient] sm:mt-10 md:mt-10 text-center md:text-left">
          Welcome to Scribe, we write about <br className="hidden md:block" />{" "}
          technology, people and culture
        </h1>
      </div>

      <div className="flex px-20  mt-10 sm:mt-16 md:mt-20 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-[90%] md:w-[80%] mx-auto gap-8 md:gap-0">
          <h2 className="text-white text-2xl font-serif">Featured</h2>
          </div>
        <div className="flex  md:flex-row justify-between items-center md:items-start w-[90%] md:w-[80%] mx-auto gap-8 md:gap-0">
          <h2 className="text-white text-2xl font-serif">Recent</h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
