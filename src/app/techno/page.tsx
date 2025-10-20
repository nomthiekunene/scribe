import React from 'react'
import Blogtech from '@/components/Blogtech'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

const techno = () => {
  return (
    <div>
        <Blogtech/>
      <Newsletter sty="text-gray-600 mt-10 text-center"/>
      <Footer/>
    </div>
  )
}

export default techno
