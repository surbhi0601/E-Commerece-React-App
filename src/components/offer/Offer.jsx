import React from 'react'
import Exclusive_img from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='container mx-auto  py-10 md:px-10 lg:flex lg:justify-around lg:items-center md:flex md:justify-around md:items-center bg-gradient-to-b from-pink-200 to-transparent sm:px-10 xs:px-8'>
      <div>
          <p className='lg:text-6xl lg:leading-tight font-semibold md:text-5xl md:leading-tight sm:text-4xl sm:leading-tight xs:text-3xl xs:leading-tight' >Exclusive</p>
          <p className='lg:text-6xl lg:leading-tight font-semibold md:text-5xl md:leading-tight sm:text-4xl sm:leading-tight xs:text-3xl xs:leading-tight'>Offer For You</p>
          <p className='lg:text-2xl lg:leading-tight font-semibold my-5 md:text-xl sm:text-lg'>ONLY ON BEST SELLER PRODUCT</p>
          <button className='lg:px-10 lg:py-4 bg-red-500 text-white rounded-full md:py-2 md:px-7 sm:py-1 sm:px-5 xs:py-2 xs:px-3 '>Check Now</button>
      </div>
      <div className='md:flex md:justify-end hidden lg:flex  '>
       <img src={Exclusive_img} alt="" className='lg:w-[75%] md:w-[50%] ' />
      </div>
    </div>
  )
}

export default Offer
