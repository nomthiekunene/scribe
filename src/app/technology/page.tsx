import React from 'react';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const technology = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <h1 className='text-5xl md:text-7xl lg:text-9xl text-center text-white pt-20 md:pt-40 pb-20 md:pb-40 px-4'>Technology</h1>
      <Newsletter sty="text-center font-[Sentient] mt-10 text-lg md:text-xl lg:text-[20px]"/>
      <Footer/>
    </div>
  )
}

export default technology