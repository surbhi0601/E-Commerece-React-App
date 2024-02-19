import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
function NavBar() {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='hidden lg:block'>
      <nav className='flex justify-around items-center py-5 shadow-lg '>
        <div className=" flex items-center">
          <img src={Logo} alt="" />
          <p className='text-4xl font-semibold'>SHOPPERS</p>
        </div>
        <div className='flex justify-center items-center' >
          <a href="/" onClick={() =>  setMenu('shop') } className='mx-5 '><Link to='/'>Shop</Link> {menu === "shop" ? <hr className='bg-red-500 h-[3px] border-none ' /> : <></>}</a>
          <a href="/" onClick={() => setMenu('mens') } className='mx-5 '><Link to='/mens'>Man</Link>{menu === "mens" ? <hr className='bg-red-500 h-[3px] border-none ' /> : <></>}</a>
          <a href="/" onClick={() => setMenu('womens') } className='mx-5 '><Link to='/womens'>Women</Link>{menu === "womens" ? <hr className='bg-red-500 h-[3px] border-none ' /> : <></>}</a>
          <a href="/" onClick={() =>  setMenu('kids') } className='mx-5 '><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr className='bg-red-500 h-[3px] border-none ' /> : <></>}</a>
        </div>
        <div className='flex items-center relative'>

          <Link to='/login'><button className='py-2 px-8 rounded-full border-gray border-2 mx-2 hover:border-black'>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt=""  /></Link>
          <div className='bg-red-600 rounded-full absolute -z-10 -top-1 -right-4 w-[24px] h-[24px] flex justify-center items-center font-bold  '>0</div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
