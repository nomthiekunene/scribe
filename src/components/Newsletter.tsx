import React from "react";
import Link from "next/link";

const newsletter = (prop: { sty: string }) => {
  return (
    <div className="bg-emerald-100 flex flex-col justify-center items-center text-black font h-[30rem]">
      <h1 className="text-6xl font-[Sentient] text-center text-[rgb(13,13,13)] mt-16">
        Get the best sent to your <br /> inbox, every month
      </h1>

      <div className="flex flex-col sm:flex-row gap-5 mt-10 items-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-black text-gray-600 text-xl sm:text-2xl text-clip rounded-xl h-16 w-full sm:w-80 md:w-96 lg:w-[30rem] px-4"
        />
        <Link href="/subscribe">
          <button className="h-16 w-full sm:w-40 rounded-xl bg-green-950 text-white text-xl sm:text-2xl px-4 hover:bg-green-800">
            Subscribe
          </button>
        </Link>
      </div>

      <p className={prop.sty}>Once monthly, no spam</p>
    </div>
  );
};

export default newsletter;
