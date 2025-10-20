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

      <div className="flex px-20 mt-10 sm:mt-16 md:mt-20">
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-2xl font-serif">Featured</h2>
          <Link href="/techno">
            <CldImage
              width="800"
              height="400"
              src="sample"
              sizes="100vw"
              alt="canvas"
              className="rounded-lg hover:scale-105 transition-transform duration-300 "
            />
            <div className="flex border-emerald-300 border-t-2 mt-16 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-64">
              <h4 className="  text-emerald-300 mt-10">TECHNOLOGY</h4>
              <p className="text-emerald-300 mt-10">May 23 2024</p>
            </div>
            <h1 className="text-white text-4xl mt-10 hover:scale-105 transition-transform duration-300">
              AI: Transforming industries one byte at a time
            </h1>
            <p className=" text-gray-700 mt-10 hover:scale-105 transition-transform duration-300">
              A look at how artificial intelligence is revolutionising various
              industries through automation and data analysis.
            </p>
          </Link>
          <Link href="/innovators">
            <CldImage
              width="800"
              height="400"
              src="sample"
              sizes="100vw"
              alt="canvas"
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="flex border-emerald-300 border-t-2 mt-16 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-64">
              <h4 className="  text-emerald-300 mt-10">PEOPLE</h4>
              <p className="text-emerald-300 mt-10">May 18 2024</p>
            </div>
            <h1 className="text-white text-4xl mt-10 hover:scale-105 transition-transform duration-300">
              Tech innovators: The minds behind the machines
            </h1>
            <p className=" text-gray-700 mt-10 hover:scale-105 transition-transform duration-300">
              Profiles of pioneering individuals who are driving technological
              advancements and innovation.
            </p>
          </Link>
        </div>




        <div className="flex flex-col  w-[100%] gap-8">
          <h2 className="text-white text-2xl font-serif ml-16">Recent</h2>
          <div className="flex gap-9 ml-14">
            <Link href="/">
              <CldImage
                width="300"
                height="100"
                src="sample"
                sizes="100vw"
                alt="canvas"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex border-emerald-300 border-t-2 mt-4 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-40">
                <h5 className="  text-emerald-300 mt-2">LIFESTYLE</h5>
                <p className="text-emerald-300 mt-2">May 1, 2024</p>
              </div>
              <h6 className="text-white text-2xl mt-2 hover:scale-105 transition-transform duration-300">
                Mindfulness in a fast-paced world
              </h6>
              <p className=" text-gray-700 mt-2 hover:scale-105 transition-transform duration-300">
                Discussing the importance and benefits of mindfulness practices
                in today&apos;s busy lifestyle.
              </p>
            </Link>

            <Link href="/">
              <CldImage
                width="300"
                height="100"
                src="sample"
                sizes="100vw"
                alt="canvas"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex border-emerald-300 border-t-2 mt-4 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-40">
                <h5 className="  text-emerald-300 mt-2">LIFESTYLE</h5>
                <p className="text-emerald-300 mt-2">May 1, 2024</p>
              </div>
              <h6 className="text-white text-2xl mt-2 hover:scale-105 transition-transform duration-300">
                Mindfulness in a fast-paced world
              </h6>
              <p className=" text-gray-700 mt-2 hover:scale-105 transition-transform duration-300">
                Discussing the importance and benefits of mindfulness practices
                in today&apos;s busy lifestyle.
              </p>
            </Link>
          </div>
          <div className="flex gap-9 ml-14">
            <Link href="/">
              <CldImage
                width="300"
                height="100"
                src="sample"
                sizes="100vw"
                alt="canvas"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex border-emerald-300 border-t-2 mt-4 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-40">
                <h5 className="  text-emerald-300 mt-2">LIFESTYLE</h5>
                <p className="text-emerald-300 mt-2">May 1, 2024</p>
              </div>
              <h6 className="text-white text-2xl mt-2 hover:scale-105 transition-transform duration-300">
                Mindfulness in a fast-paced world
              </h6>
              <p className=" text-gray-700 mt-2 hover:scale-105 transition-transform duration-300">
                Discussing the importance and benefits of mindfulness practices
                in today&apos;s busy lifestyle.
              </p>
            </Link>

            <Link href="/">
              <CldImage
                width="300"
                height="100"
                src="sample"
                sizes="100vw"
                alt="canvas"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex border-emerald-300 border-t-2 mt-4 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-40">
                <h5 className="  text-emerald-300 mt-2">LIFESTYLE</h5>
                <p className="text-emerald-300 mt-2">May 1, 2024</p>
              </div>
              <h6 className="text-white text-2xl mt-2 hover:scale-105 transition-transform duration-300">
                Mindfulness in a fast-paced world
              </h6>
              <p className=" text-gray-700 mt-2 hover:scale-105 transition-transform duration-300">
                Discussing the importance and benefits of mindfulness practices
                in today&apos;s busy lifestyle.
              </p>
            </Link>
          </div>
          <div className="flex gap-9 ml-14">
            <Link href="/">
              <CldImage
                width="300"
                height="100"
                src="sample"
                sizes="100vw"
                alt="canvas"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex border-emerald-300 border-t-2 mt-4 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-40">
                <h5 className="  text-emerald-300 mt-2">LIFESTYLE</h5>
                <p className="text-emerald-300 mt-2">May 1, 2024</p>
              </div>
              <h6 className="text-white text-2xl mt-2 hover:scale-105 transition-transform duration-300">
                Mindfulness in a fast-paced world
              </h6>
              <p className=" text-gray-700 mt-2 hover:scale-105 transition-transform duration-300">
                Discussing the importance and benefits of mindfulness practices
                in today&apos;s busy lifestyle.
              </p>
            </Link>

            <Link href="/">
              <CldImage
                width="300"
                height="100"
                src="sample"
                sizes="100vw"
                alt="canvas"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="flex border-emerald-300 border-t-2 mt-4 mx-auto w[100%]  hover:scale-105 transition-transform duration-300 gap-40">
                <h5 className="  text-emerald-300 mt-2">LIFESTYLE</h5>
                <p className="text-emerald-300 mt-2">May 1, 2024</p>
              </div>
              <h6 className="text-white text-2xl mt-2 hover:scale-105 transition-transform duration-300">
                Mindfulness in a fast-paced world
              </h6>
              <p className=" text-gray-700 mt-2 hover:scale-105 transition-transform duration-300">
                Discussing the importance and benefits of mindfulness practices
                in today&apos;s busy lifestyle.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
