import React from 'react';
import Link from 'next/link';

const Subscription = () => {
  return (
   <div className="bg-emerald-100 flex flex-col justify-center items-center text-black font h-[40rem]">
      <h1 className="text-6xl font-[Sentient] text-center text-[rgb(13,13,13)] mt-16">
        Get the best sent to your <br /> inbox, every month
      </h1>
      <p className='mt-10 font-serif text-center text-2xl'>Join our community of curious minds and get exclusive <br /> insights into technology, people, and culture delivered <br /> straight to your email.</p>

      <div className="flex gap-5 mt-10">
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-black text-gray-600 text-2xl text-clip rounded-xl h-16 w-[30rem]"
        />
        <Link href="/subscribe">
          <button className="h-16 w-40 rounded-xl bg-green-950 text-white text-2xl">
            Subcribe
          </button>
        </Link>
      </div>

        <p className="text-center font-[Setient] mt-10 text-xl">Once monthly, no spam</p>
    </div> 
  )
}

export default Subscription
