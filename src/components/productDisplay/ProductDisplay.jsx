import React from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (e) => {
    const { product } = e;

    return (
        <div className='flex container mx-auto gap-20   '>
            <div className='flex-1 flex '>
                <div className='flex flex-col gap-3 '>
                    <img src={product.image} alt="" className='w-[150px] h-[150px] rounded-md   ' />
                    <img src={product.image} alt="" className='w-[150px] h-[150px] rounded-md   ' />
                    <img src={product.image} alt="" className='w-[150px] h-[150px] rounded-md   ' />
                    <img src={product.image} alt="" className='w-[150px] h-[150px] rounded-md   ' />
                </div>
                <div className=''>
                    <img src={product.image} alt="" className='w-[640px] pl-5 rounded-md' />

                </div>
            </div>
            <div className='flex-1  pr-24'>
                <p className='text-4xl font-semibold leading-tight mb-8 '>{product.name}</p>
                <div className='flex  items-center my-9'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className=' mb-8 flex'>
                    <div><p className='text-xl  line-through text-gray-600'>${product.old_price}</p></div>
                    <div><p className='text-4xl mx-5 text-red-600' >${product.new_price}</p></div>
                </div>
                <div className='mb-8'>
                    <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident vero eum et dignissimos rem veniam illo eligendi, harum labore quos obcaecati reiciendis aliquid! Modi.</p>
                </div>
                <div >
                    <p className='text-xl font-semibold mb-2'>Select Size</p>
                    <div className='flex gap-4 mb-8'>
                        <p className='py-2 bg-gray-100  px-3 border border-gray-500'>S</p>
                        <p className='py-2 bg-gray-100  px-3 border border-gray-500'>M</p>
                        <p className='py-2 bg-gray-100  px-3 border border-gray-500'>L</p>
                        <p className='py-2 bg-gray-100  px-3 border border-gray-500'>XL</p>
                        <p className='py-2 bg-gray-100  px-3 border border-gray-500'>XXL</p>
                    </div>
                </div >
                <button className='py-2 px-8 bg-red-600 my-4 text-white  mb-8 '>Add To Cart</button>
                <div className='mb-8'>
                    <p className='font-bold py-1'>Category: <span className='font-normal'>Women, T-shirt , crop-Tops</span></p>
                    <p className='font-bold py-1'>Tages: <span className='font-normal'>Morder , Latest</span></p>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay

