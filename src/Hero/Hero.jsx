import React from 'react'
import hand_icon from '../components/assets/hand_icon.png'
import arrow_icon from '../components/assets/arrow.png'
import Hero_png from '../components/assets/Hero.png'
const Hero = () => {
    return (
       <div className='bg-gradient-to-b from-pink-200 to-transparent py-10'>
         <div className=' flex container mx-auto items-center px-20 '>
            <div className="flex-1 ">
                <h2 className='text-3xl font-semibold'>NEW ARRIVALS ONLY</h2>
                <div>
                        <div className="first flex items-center">
                            <p className='text-7xl font-semibold leading-tight'>new</p>
                            <img src={hand_icon} alt="" className='w-16' />
                        </div>
                        <p className='text-7xl font-semibold leading-tight'>collections</p>
                        <p className='text-7xl font-semibold leading-tight'>For Everyone</p>
                </div>

                <button className="inline-flex py-3 px-4 justify-center items-center bg-red-600 rounded-full my-3  text-white">Latest collection <img src={arrow_icon} className='h-3 mx-2' /></button>
                
            </div>
            <div className=" flex-1 flex justify-end ">
                <img src={Hero_png} alt="" />
            </div>

        </div>
       </div>
    )
}

export default Hero
