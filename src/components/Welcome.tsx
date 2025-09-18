import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Welcome = () => {
  return (
    <div className="bg-black">
      <div className="h-16 bg-green-950">
        <h5 className="text-white text-center pt-6 text-sm">
          <Link href="/about">
            A minimal blog template . View all templates
          </Link>
        </h5>
      </div>

      <Navbar />

      {/* Heading Section */}
      <div className="border-b-2 border-white pb-14 w-[90%] md:w-[80%] mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-[Sentient] mt-10 sm:mt-16 md:mt-20 text-center md:text-left">
          Welcome to Scribe, we write about <br className="hidden md:block" />{" "}
          technology, people and culture
        </h1>
      </div>

      {/* Featured / Recent */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10 sm:mt-16 md:mt-20 w-[90%] md:w-[80%] mx-auto gap-8 md:gap-0">
        <h2 className="text-white text-2xl font-serif">Featured</h2>
        <h2 className="text-white text-2xl font-serif">Recent</h2>
      </div>
    </div>
  );
};

export default Welcome;
