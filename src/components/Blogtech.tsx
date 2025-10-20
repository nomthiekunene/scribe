"use client";

import React from "react";
import { CldImage } from "next-cloudinary";


const Blogtech = () => {
  return (
    <div className="bg-black pt-20">
      <div className="flex flex-col justify-center items-center gap-10 pb-16">
        <div className="flex border-emerald-300 border-t-2 mx-auto w[100%] gap-80">
          <h4 className="  text-emerald-300 mt-5">TECHNOLOGY</h4>
          <p className="text-emerald-300 mt-5">May 23 2024</p>
        </div>
        <h1 className="text-white text-4xl mt-8">
          AI: Transforming industries one byte at a time
        </h1>
        <p className=" text-gray-700 mt-5">
          A look at how artificial intelligence is revolutionising various
          industries through automation and data analysis.
        </p>

         <CldImage
              width="800"
              height="400"
              src="sample"
              sizes="100vw"
              alt="canvas"
              className="rounded-lg "
            />

            <h1 className="text-white text-6xl text-end">Introduction</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">Artificial Intelligence (AI) is revolutionising industries. It automates processes, analyses data, and drives efficiency across various sectors.</p>
            
            <h1 className="text-white text-6xl text-end">AI in Business</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">Businesses leverage AI to enhance operations. From predictive analytics to customer service chatbots, AI tools optimise performance and decision-making.</p>
            
             <h1 className="text-white text-6xl text-end">Healthcare Innovations</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">AI is transforming healthcare. It aids in diagnostics, personalises treatment plans, and streamlines administrative tasks, improving patient outcomes.</p>
            
             <h1 className="text-white text-6xl text-end">Future of AI</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">The future of AI holds exciting possibilities. Continuous advancements in machine learning and neural networks promise even greater innovations and societal benefits.</p> 
      </div>
    </div>
  );
};

export default Blogtech;
