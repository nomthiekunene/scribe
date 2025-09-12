import React from 'react';
import Navbar from '@/components/Navbar';
import Subscription from '@/components/Subscription';
import Footer from '@/components/Footer'

const subscribe = () => {
  return (
    <div className='h-[100vh] bg-black text-white text-5xl'>
       <Navbar/>
        <Subscription/>
      <Footer/>
      </div>
      
  )
}

export default subscribe
