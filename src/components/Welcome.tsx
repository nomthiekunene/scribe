import { CldImage } from "next-cloudinary";
import React from "react";
import Link from "next/link";
 

 
const Welcome = () => {
 
  return (
    <div className="bg-black py-10 md:py-20">
      <div className="border-b-2 border-white pb-14 w-[100%] md:w-[80%] mx-auto">
        <h1 className="text-white text-4xl sm:text-3xl md:text-4xl font-[Sentient] sm:mt-10 md:mt-10 text-center md:text-left">
          Welcome to Scribe, we write about <br className="hidden md:block" />{" "}
          technology, people and culture
        </h1>
      </div>

      <div className="flex px-20 mt-10 sm:mt-16 md:mt-20 text-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-2xl font-serif">Featured</h2>
          <Link href="/">
 
<CldImage
  width="600"
  height="300"
  src="sample"
  sizes="100vw"
  alt="canvas"
  className="rounded-lg hover:scale-105 transition-transform duration-300"
/>
<div className="flex">
<h4 className="border-t-2 border-emerald-300 text-emerald-300 mt-5 hover:scale-105 transition-transform duration-300">TECHNOLOGY</h4>
<h1></h1>
</div>
          </Link> 
          <Link href="/">
 
<CldImage
  width="960"
  height="600"
  src="sample"
  sizes="100vw"
  alt="canvas"
  className="rounded-lg hover:scale-105 transition-transform duration-300"
/>
          </Link>   
          </div>
        <div className="flex  flex-col md:flex-row justify-between items-center md:items-start w-[90%] md:w-[80%] mx-auto gap-8 md:gap-0">
          <h2 className="text-white text-2xl font-serif">Recent</h2>
        </div>
      </div>
    </div>
  );
};


export default Welcome;
