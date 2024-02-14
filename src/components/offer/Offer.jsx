import React from 'react'
import Exclusive_img from '../assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='container mx-auto py-10 flex justify-around items-center bg-gradient-to-b from-pink-200 to-transparent '>
      <div>
          <p className='text-6xl leading-tight font-semibold ' >Exclusive</p>
          <p className='text-6xl leading-tight font-semibold '>Offer For You</p>
          <p className='text-2xl leading-tight font-semibold my-5'>ONLY ON BEST SELLER PRODUCT</p>
          <button className='px-10 py-4 bg-red-500 text-white rounded-full'>Check Now</button>
      </div>
      <div>
       <img src={Exclusive_img} alt="" className='w-[75%]' />
      </div>
    </div>
  )
}

export default Offer
