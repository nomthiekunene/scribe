import React from 'react';
import Link from 'next/link';

const Subscription = () => {
  return (
    <div className="bg-emerald-100 flex flex-col justify-center items-center text-black h-auto md:h-[40rem] px-4 py-12">
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-[Sentient] text-center text-[rgb(13,13,13)] mt-6 md:mt-16 leading-snug">
        Get the best sent to your <br className="hidden md:block" /> inbox, every month
      </h1>

      
      <p className="mt-6 sm:mt-8 md:mt-10 font-serif text-center text-lg sm:text-xl md:text-2xl leading-relaxed">
        Join our community of curious minds and get exclusive <br className="hidden md:block" /> 
        insights into technology, people, and culture delivered <br className="hidden md:block" /> 
        straight to your email.
      </p>

      
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-8 md:mt-10 w-full sm:w-auto items-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-black text-gray-600 text-lg sm:text-xl md:text-2xl rounded-xl h-10 sm:h-10 w-[90%] sm:w-[24rem] md:w-[30rem] px-4"
        />
        <Link href="/subscribe" className="w-[90%] sm:w-auto">
          <button className="h-10 sm:h-10 w-full sm:w-[24rem] md:w-[30rem] rounded-xl bg-green-950 text-white text-lg sm:text-xl md:text-2xl">
            Subscribe
          </button>
        </Link>
      </div>

      
      <p className="text-center font-[Sentient] mt-6 md:mt-10 text-base sm:text-lg md:text-xl">
        Once monthly, no spam
      </p>
    </div>
  );
};

export default Subscription;
