import React from 'react'
import breadcrupm_icon from '../assets/breadcrum_arrow.png'

const BreadCrumps = (e) => {
    const {product} = e;
  return (
    <div className='flex my-11 mx-16 md:text-sm sm:text-xs sm:mx-5 sm:my-3 items-center xl:text-lg xl:py-7 xl:px-10 font-semibold'>
      HOME <img src={breadcrupm_icon} className='mx-1' /> SHOP <img src={breadcrupm_icon} className='mx-1' />{product.category} <img src={breadcrupm_icon} className='mx-1'  />{product.name}
    </div>
  )
}

export default BreadCrumps
