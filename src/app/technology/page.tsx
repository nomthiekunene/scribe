import React from 'react';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const technology = () => {
  return (
    <div className='h-[100vh] bg-black text-white text-5xl'>
       <Navbar/>
      <h1 className='text-9xl text-center text-white mt-40 pb-80'>Technology</h1>
      <Newsletter sty="text-center font-[Setient] mt-10 text-[20px]"/>
      <Footer/>
      </div>
  )
}

export default technology