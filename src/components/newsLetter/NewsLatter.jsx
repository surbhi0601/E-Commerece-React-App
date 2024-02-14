import { logDOM } from '@testing-library/react'
import React from 'react'

const NewsLatter = () => {
  return (
    <div className='container mx-auto flex justify-center items-center flex-col py-16 bg-gradient-to-b from-pink-200 to-transparent'>
      <p className='text-4xl font-semibold '>Get Exclusive Offer On Your Email</p>
      <p className='text-lg my-6 text-gray-700 font-semibold'>Subscribe to Our NewsLatter and Stay Updated</p>
      <div className='flex w-[50%]  rounded-full border-gray-600 border border-dotted  '>
        <input type="text" placeholder='Enter Your Name' className='px-6 bg-transparent w-full outline-none' />
       <button className='bg-black text-white px-10 py-5 rounded-full '>SUBSCRIBE</button>
      </div>
      
    </div>
  )
}

export default NewsLatter
