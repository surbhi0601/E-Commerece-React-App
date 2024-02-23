import React from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (e) => {
    const { product } = e;

    return (
        <div className='xl:flex xl:flex-row container mx-auto xl:gap-8 sm:gap-10 md:gap-3 lg:px-7 xl:px-0 lg:gap-14 md:px-7 md:flex md:flex-col sm:flex sm:flex-col'>
            <div className='flex-1 flex justify-center '>
                <div className='xl:flex flex-col gap-3 md:gap-5 hidden md:flex  '>
                    <img src={product.image} alt="" className='xl:w-[160px] xl:h-[150px] rounded-md lg:w-[150px] lg:h-[164px] md:w-[150px] md:h-[145px] ' />
                    <img src={product.image} alt="" className='xl:w-[160px] xl:h-[150px] rounded-md lg:w-[150px] lg:h-[164px] md:w-[150px] md:h-[145px] ' />
                    <img src={product.image} alt="" className='xl:w-[160px] xl:h-[150px] rounded-md lg:w-[150px] lg:h-[164px] md:w-[150px] md:h-[145px] ' />
                    <img src={product.image} alt="" className='xl:w-[160px] xl:h-[150px] rounded-md lg:w-[150px] lg:h-[164px] md:w-[150px] md:h-[145px] ' />
                </div>
                <div className=''>
                    <img src={product.image} alt="" className='xl:h-full xl:w-full xl:pr-0 pl-5 sm:px-5 rounded-md ' />

                </div>
            </div>
                <div className='flex gap-3 md:gap-5 md:hidden px-5 '>
                    <img src={product.image} alt="" className='w-[100px] h-[80px] rounded-md   ' />
                    <img src={product.image} alt="" className='w-[100px] h-[80px] rounded-md   ' />
                    <img src={product.image} alt="" className='w-[100px] h-[80px] rounded-md   ' />
                    <img src={product.image} alt="" className='w-[100px] h-[80px] rounded-md   ' />
                </div>
            <div className='flex-1  pr-24 lg:pr-12 md:py-0 sm:px-5 sm:pr-5 '>
                <p className='text-4xl font-semibold leading-tight xl:mb-8 lg:text-3xl sm:text-2xl sm:mb-4'>{product.name}</p>
                <div className='flex  items-center my-9 lg:my-7 sm:my-5'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className=' xl:mb-8 flex lg:mb-4 sm:mb-4'>
                    <div><p className='text-xl  line-through text-gray-600 lg:text-2xl'>${product.old_price}</p></div>
                    <div><p className='text-4xl mx-5 text-red-600 lg:text-3xl' >${product.new_price}</p></div>
                </div>
                <div className='xl:mb-8 lg:mb-4 sm:mb-3'>
                    <p className='text-lg lg:text-lg text-justify sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident vero eum et dignissimos rem veniam illo eligendi, harum labore quos obcaecati reiciendis aliquid! Modi.</p>
                </div>
                <div >
                    <p className='text-xl font-semibold xl:mb-2 lg:mb-1'>Select Size</p>
                    <div className='flex gap-4 xl:mb-8 lg:mb-3 sm:mb-2'>
                        <p className='py-2 lg:py-2 bg-gray-100  px-3 lg:px-3 border border-gray-500'>S</p>
                        <p className='py-2 lg:py-2 bg-gray-100  px-3 lg:px-3 border border-gray-500'>M</p>
                        <p className='py-2 lg:py-2 bg-gray-100  px-3 lg:px-3 border border-gray-500'>L</p>
                        <p className='py-2 lg:py-2 bg-gray-100  px-3 lg:px-3 border border-gray-500'>XL</p>
                        <p className='py-2 lg:py-2 bg-gray-100  px-3 lg:px-3 border border-gray-500'>XXL</p>
                    </div>
                </div >
                <button className='py-2 px-8 bg-red-600 my-4 text-white  xl:mb-8 lg:mb-4 '>Add To Cart</button>
                <div className='xl:mb-8 lg:mb-4'>
                    <p className='font-bold py-1'>Category: <span className='font-normal'>Women, T-shirt , crop-Tops</span></p>
                    <p className='font-bold py-1'>Tages: <span className='font-normal'>Morder , Latest</span></p>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay

