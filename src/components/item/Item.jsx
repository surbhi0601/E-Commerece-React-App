import React from 'react'

const Item = (e) => {
    return (
        
            <div className='shadow-xl overflow-hidden p-6 scale-100 hover:scale-105 transition-all '>
               <div >
               <img src={e.image} alt="" className='mb-2' />
                <p className='mb-2'>{e.name}</p>
               </div>
                <div className='flex font-semibold'>
                    <p className='mr-2'>${e.new_price}</p>
                    <p className='line-through text-gray-500'>${e.old_price}</p>
                </div>
            </div>
        
    )
}

export default Item

