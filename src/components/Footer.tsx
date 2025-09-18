import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" h-[95vh] bg-black ">
    <div className="flex justify-center gap-40 pt-20 border-b-2 border-gray-800 pb-20 w-[80%] mx-auto">
      <h1 className="text-2xl md:text-4xl text-emerald-300 font-serif font-medium hover:text-gray-700">
        <Link href="/">Scribe</Link>
      </h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl mt-4 font-serif">Pages</h2>

        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/">Home</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/about">About</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/subscribe">Subscribe</Link>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl mt-4 font-serif">Categories</h2>

        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/articles">All Articles</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/culture">Culture</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/lifestyle">Lifestyle</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/people">People</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/technology">Technology</Link>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl mt-4 font-serif">Contant</h2>

        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/">X (Twitter)</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/">LinkedIn</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
          <Link href="/">Email Us</Link>
        </p>
      </div>

      
    </div>
    <div className="flex mt-20 gap-8 pl-56 pr-40">
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
            <Link href="/">Buy template</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
            <Link href="/">More templates</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
            <Link href="/">Unlimited Access template</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
            <Link href="/">Made in Framer</Link>
        </p>
        <p className="text-gray-400 text-xl font-serif hover:text-amber-50">
            <Link href="/">Built by Bryn</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
