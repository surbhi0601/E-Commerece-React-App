import { logDOM } from '@testing-library/react'
import React from 'react'

const NewsLatter = () => {
  return (
    <div className='container mx-auto flex justify-center items-center flex-col py-16 bg-gradient-to-b from-pink-200 to-transparent sm:px-10'>
      <p className='lg:text-4xl font-semibold sm:text-2xl'>Get Exclusive Offer On Your Email</p>
      <p className='lg:text-lg my-6 text-gray-700 font-semibold sm:text-base'>Subscribe to Our NewsLatter and Stay Updated</p>
      <div className='lg:flex lg:w-[50%]  rounded-full border-gray-600 border border-dotted sm:mx-auto sm:w-[100%]'>
        <input type="text" placeholder='Enter Your Name' className='lg:px-6 bg-transparent lg:w-full outline-none ' />
       <button className='bg-black text-white lg:px-10 lg:py-5 rounded-full sm:px-5 sm:py-2 sm:text-sm '>SUBSCRIBE</button>
      </div>
      
    </div>
  )
}

export default NewsLatter
