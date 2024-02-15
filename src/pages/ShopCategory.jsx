import React, { useContext } from 'react'
import { ShopContex } from '../components/contex/ShopContex'
import dropdown from '../components/assets/dropdown_icon.png'
import Item from '../components/item/Item'

function ShopCategory(e) {
  const { all_product } = useContext(ShopContex)
  return (
    <div className='container mx-auto mb-20'>
      <img src={e.banner} />
      <div className='flex justify-between py-10'>
        <div>
        <p>
          <span className='font-semibold'>Showing 1-12 </span> Out of 36 Products
        </p>
        </div>
        <div className='flex items-center mx-3 py-1 px-4 border border-gray-700  rounded-full'>
          <p>Sort by </p>
          <img src={dropdown} className='h-2'/>
        </div>
      </div>
      <div className='grid grid-cols-4 container mx-auto gap-10  '>
        {all_product.map((item,index)=>{
          if(e.category === item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
}
        })}
      </div>
      <div className='pt-20 flex justify-center '>
        <button className='py-2 px-7  rounded-full shadow-lg shadow-gray-600'>Explore More...</button>
      </div>
    </div>
  )
}

export default ShopCategory
