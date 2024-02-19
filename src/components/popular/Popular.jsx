import React from 'react'
import data_product from '../assets/data'
import Item from '../item/Item'

const Popular = () => {
    return (
        <div className='container mx-auto  py-10 '>
            <p className='lg:first-line lg:text-4xl font-bold text-center sm:text-3xl'>POPULAR IN WOMEN</p>
            <hr className='h-1 mx-auto w-[15%] my-2 bg-black'/>
            <div className='lg:flex lg:gap-7  md:grid md:grid-cols-2 md:gap-7 md:mx-7 sm:grid sm:grid-cols-1 sm:gap-7 sm:mx-7'>
                {data_product.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular
