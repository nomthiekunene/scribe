import React from 'react';
import Welcome from '@/components/Welcome';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';


const home = () => {
  return (
    <div>
     <Welcome/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}

export default home