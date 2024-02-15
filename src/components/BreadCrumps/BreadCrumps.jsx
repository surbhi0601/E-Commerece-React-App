import React from 'react'
import breadcrupm_icon from '../assets/breadcrum_arrow.png'

const BreadCrumps = (e) => {
    const {product} = e;
  return (
    <div className='flex'>
      HOME <img src={breadcrupm_icon} className='mx-1' /> SHOP <img src={breadcrupm_icon} className='mx-1' />{product.category} <img src={breadcrupm_icon} className='mx-1'  />{product.name}
    </div>
  )
}

export default BreadCrumps
