import React from 'react'
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';


const about = () => {
  return (
    <div className='h-[100vh] bg-black text-white text-5xl'>
       <Navbar/>
      <About/>
      <Newsletter sty="text-center font-[Setient] mt-10 text-[20px]"/>
      <Footer/>
    </div>
  )
}

export default about