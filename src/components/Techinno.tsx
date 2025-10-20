import React from 'react'
import { CldImage } from 'next-cloudinary'

const techinno = () => {
  return (
    <div className="bg-black pt-20">
      <div className="flex flex-col justify-center items-center gap-10 pb-16">
        <div className="flex border-emerald-300 border-t-2 mx-auto w[100%] gap-80">
          <h4 className="  text-emerald-300 mt-5">PEOPLE</h4>
          <p className="text-emerald-300 mt-5">May 18 2024</p>
        </div>
        <h1 className="text-white text-4xl mt-8">
          Tech innovators: The minds behind the machines
        </h1>
        <p className=" text-gray-700 mt-5">
          Profiles of pioneering individuals who are driving technological advancements and innovation.
        </p>

         <CldImage
              width="800"
              height="400"
              src="sample"
              sizes="100vw"
              alt="canvas"
              className="rounded-lg "
            />

            <h1 className="text-white text-6xl text-end">Introduction</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">Tech innovators are the driving force behind technological advancements. Their vision and creativity shape the future of technology.</p>
            
            <h1 className="text-white text-6xl text-end">Pioneers in Technology</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">These pioneers bring groundbreaking ideas to life. Their work ranges from developing cutting-edge software to creating innovative hardware solutions.</p>
            
             <h1 className="text-white text-6xl text-end">Impact on Society</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">Tech innovators have a profound impact on society. Their inventions improve lives, enhance productivity, and solve complex problems across various fields.</p>
            
             <h1 className="text-white text-6xl text-end">Future Trends</h1>
            <p className=" text-gray-500 text-2xl mt-5 pr-56 pl-64">Looking ahead, tech innovators continue to push boundaries. Emerging technologies like AI, blockchain, and quantum computing promise to transform industries further.</p> 
      </div>
    </div>
  )
}

export default techinno
