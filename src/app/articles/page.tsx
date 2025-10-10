import React from 'react';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ArticlesList from '@/components/ArticlesList';

const articles = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <ArticlesList />
      <Newsletter sty="text-center font-[Sentient] mt-10 text-lg md:text-xl lg:text-[20px]"/>
      <Footer/>
    </div>
  )
}

export default articles