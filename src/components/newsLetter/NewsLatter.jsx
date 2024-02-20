import { logDOM } from '@testing-library/react'
import React from 'react'

const NewsLatter = () => {
  return (
    <div className='container mx-auto flex justify-center items-center flex-col py-16 bg-gradient-to-b from-pink-200 to-transparent sm:px-10 '>
      <p className='lg:text-4xl font-semibold sm:text-2xl'>Get Exclusive Offer On Your Email</p>
      <p className='lg:text-lg my-6 text-gray-700 font-semibold xs:my-3 sm:text-base xs:text-xs'>Subscribe to Our NewsLatter and Stay Updated</p>
      <div className='lg:flex md:flex sm:flex xs:flex lg:w-[50%] xs:w-[80%]   rounded-full border-gray-600 border border-dotted sm:mx-auto sm:w-[100%] md:w-[70%] xs:mx-auto'>
        <input type="text" placeholder='Enter Your Name' className='lg:px-6 bg-transparent lg:w-full outline-none md:w-full md:p-2 sm:p-2 sm:w-full xs:px-2 xs:w-2/3 xs:placeholder:text-xs' />
        <button className='bg-black text-white lg:px-10 lg:py-5 rounded-full sm:px-5 sm:py-2 sm:text-sm md:px-7 md:py-4 xs:px-4 xs:py-0 xs:text-xs '>SUBSCRIBE</button>
      </div>

    </div>
  )
}

export default NewsLatter
