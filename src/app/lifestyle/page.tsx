import React from 'react';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const lifestyle = () => {
  return (
    <div className='h-[100vh] bg-black text-white text-5xl'>

      <h1 className='text-9xl text-center text-white pt-40 pb-40'>Lifestyle</h1>
      <Newsletter sty="text-center font-[Setient] mt-10 text-[20px]"/>
      <Footer/>
      </div>
  )
}

export default lifestyle