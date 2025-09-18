import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black min-h-[40vh] py-12 md:py-20">
      
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-12 md:gap-40 border-b-2 border-gray-800 pb-12 md:pb-20 w-[90%] md:w-[80%] mx-auto">
        
        <h1 className="text-2xl md:text-4xl text-emerald-300 font-serif font-medium hover:text-gray-700 text-center md:text-left">
          <Link href="/">Scribe</Link>
        </h1>

        
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-white text-xl md:text-2xl mt-2 md:mt-4 font-serif">
            Pages
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/">Home</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/about">About</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/subscribe">Subscribe</Link>
          </p>
        </div>

        
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-white text-xl md:text-2xl mt-2 md:mt-4 font-serif">
            Categories
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/articles">All Articles</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/culture">Culture</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/lifestyle">Lifestyle</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/people">People</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/technology">Technology</Link>
          </p>
        </div>

        
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-white text-xl md:text-2xl mt-2 md:mt-4 font-serif">
            Contact
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/">X (Twitter)</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/">LinkedIn</Link>
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
            <Link href="/">Email Us</Link>
          </p>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mt-10 md:mt-20 px-6 md:px-20">
        <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
          <Link href="/">Buy template</Link>
        </p>
        <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
          <Link href="/">More templates</Link>
        </p>
        <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
          <Link href="/">Unlimited Access template</Link>
        </p>
        <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
          <Link href="/">Made in Framer</Link>
        </p>
        <p className="text-gray-400 text-lg md:text-xl font-serif hover:text-amber-50">
          <Link href="/">Built by Bryn</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
