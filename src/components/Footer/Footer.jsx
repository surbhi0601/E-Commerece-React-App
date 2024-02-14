import React from 'react'
import Logo from '../assets/logo.png'
import instagram_icon from '../assets/instagram_icon.png'
import printerest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-center items-center flex-col my-3'>
            <div className=" flex items-center">
                <img src={Logo} alt="" className='h-24' />
                <p className='text-5xl font-semibold'>SHOPPERS</p>
            </div>
            <div className='my-4'>
                <a href="" className='mx-5 py-7 font-semibold'>Company</a>
                <a href="" className='mx-5 py-7 font-semibold'>Product</a>
                <a href="" className='mx-5 py-7 font-semibold'>Offices</a>
                <a href="" className='mx-5 py-7 font-semibold'>About</a>
                <a href="" className='mx-5 py-7 font-semibold'>Contect</a>
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
