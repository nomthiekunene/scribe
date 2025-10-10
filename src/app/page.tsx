"use client"

import React from 'react';
import Welcome from '@/components/Welcome';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';


const home = () => {
  return (
    <div>
     <Welcome/>
     <Newsletter sty="text-gray-500 mt-4"/>
     <Footer/>
    </div>
  )
}

export default home