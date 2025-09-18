import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const welcome = () => {
  return (
    <div className=" bg-black">
      <div className="h-16 bg-green-950">
        <h5 className="text-white text-center pt-6 text-sm">
          <Link href="/about">
            A minimal blog template . View all templates
          </Link>
        </h5>
      </div>

      <Navbar />
      <div className="border-b-2 border-white pb-14 w-[80%] mx-auto">
        <h1 className="text-white text-4xl font-[Sentient] mt-20">
          Welcome to Scribe, we write about <br /> technology, people and
          culture
        </h1>
      </div>
      <div className="flex">
        <div className="flex col">
          <h2 className="text-white pl-40 mt-20 text-2xl font-serif">Featured</h2>
        </div>
        <div className="flex col">
          <h2 className="text-white pl-96 mt-20 text-2xl font-serif">Recent</h2>
        </div>
      </div>
    </div>
  );
};

export default welcome;
