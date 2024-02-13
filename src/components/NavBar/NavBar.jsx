import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
function NavBar() {
    const [menu,setMenu] = useState("shop")
  return (
    <div>
      <nav className='flex justify-around items-center py-5 shadow-lg'>
        <div className=" flex items-center">
            <img src={Logo} alt="" />
            <p className='text-4xl font-semibold'>SHOPPERS</p>
        </div>
        <div >
            <a href="/" onClick={() => setMenu('shop')} className='mx-4'>Shop</a>
            <a href="/" onClick={() => setMenu('mens')} className='mx-4'>Man</a>
            <a href="/" onClick={() => setMenu('womens')} className='mx-4'>Women</a>
            <a href="/" onClick={() => setMenu('kids')} className='mx-4'>Kids</a>
        </div>
        <div className='flex items-center relative'>
            
        <button className='py-2 px-8 rounded-full border-gray border-2'>Login</button>
        <img src={cart_icon} alt="" className=' z-10'/>
        <div className='bg-red-400 rounded-full absolute -top-1 -right-4 w-[24px] h-[24px] flex justify-center items-center font-bold  '>0</div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
