import React from 'react'
import New_collections from '../assets/new_collections'
import Item from '../item/Item'
const NewCollection = () => {
    return (
        <div className='container mx-auto py-10'>
            <p className='text-4xl font-bold text-center '>NEW COLLECTION</p>
            <hr className='h-1 mx-auto w-[15%] my-2 bg-black' />
            <div className='grid grid-cols-4 gap-10 py-10'>
             {New_collections.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
             })}
            </div>
        </div>

    )
}

export default NewCollection
