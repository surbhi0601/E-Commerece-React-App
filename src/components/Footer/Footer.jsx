import React from 'react'
import Logo from '../assets/logo.png'
import instagram_icon from '../assets/instagram_icon.png'
import printerest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-center items-center flex-col my-3'>
            <div className=" flex items-center">
                <img src={Logo} alt="" className='h-24 sm:h-20' />
                <p className='lg:text-5xl font-semibold sm:text-4xl'>SHOPPERS</p>
            </div>
            <div className='lg:my-4'>
                <a href="" className='lg:mx-5 lg:py-7 font-semibold sm:mx-2 sm:text-sm'>Company</a>
                <a href="" className='lg:mx-5 lg:py-7 font-semibold sm:mx-2 sm:text-sm'>Product</a>
                <a href="" className='lg:mx-5 lg:py-7 font-semibold sm:mx-2 sm:text-sm'>Offices</a>
                <a href="" className='lg:mx-5 lg:py-7 font-semibold sm:mx-2 sm:text-sm'>About</a>
                <a href="" className='lg:mx-5 lg:py-7 font-semibold sm:mx-2 sm:text-sm'>Contect</a>
            </div>
            <div className='flex justify-center items-center mt-8 mb-4'>
                <img src={instagram_icon} alt="" className='mx-3 ' />
                <img src={printerest_icon} alt="" className='mx-3 ' />
                <img src={whatsapp_icon} alt="" className='mx-3 ' />
            </div>
            <hr className='h-[1px] bg-gray-500 border-none w-[100%] my-4' />
            <p>Copyright @ All Right Reserved</p>
        </div>
    )
}

export default Footer
