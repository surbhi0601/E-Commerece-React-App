import React, { useContext } from 'react'
import { ShopContex } from '../components/contex/ShopContex'
import dropdown from '../components/assets/dropdown_icon.png'
import Item from '../components/item/Item'

function ShopCategory(e) {
  const { all_product } = useContext(ShopContex)
  return (
    <div className='container mx-auto mb-20 lg:px-7 md:px-6 sm:px-5 xs:px-4'>
      <img src={e.banner} className='' />
      <div className='flex justify-between items-center py-10 sm:py-5 '>
        <div>
          <p className='sm:text-xs xs:text-sm'>
            <span className='font-semibold'>Showing 1-12 </span> Out of 36 Products
          </p>
        </div>
        <div className='flex items-center mx-3 py-1 px-4 border border-gray-700  rounded-full sm:text-xs xs:hidden '>
          <p>Sort by </p>
          <img src={dropdown} className='h-2' />
        </div>
      </div>
      <div className='sm:px-8 xs:px-4'>
      <div className='xl:grid xl:grid-cols-4 container lg:gird lg:grid-cols-3 mx-auto gap-10 lg:text-sm lg:gap-7 md:grid md:grid-cols-3 md:gap-7 sm:grid sm:grid-cols-1 sm:gap-5 xs:grid xs:grid-cols-1 xs:gap-1 xs:text-sm' >
        {all_product.map((item, index) => {
          if (e.category === item.category) {
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
        })}
      </div>
      </div>
      <div className='pt-20 flex justify-center '>
        <button className='py-2 px-7  rounded-full shadow-lg shadow-gray-600'>Explore More...</button>
      </div>
    </div>
  )
}

export default ShopCategory
