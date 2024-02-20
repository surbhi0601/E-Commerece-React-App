import React from 'react'
import hand_icon from '../components/assets/hand_icon.png'
import arrow_icon from '../components/assets/arrow.png'
import Hero_png from '../components/assets/Hero.png'
const Hero = () => {
    return (
        <div className='bg-gradient-to-b from-pink-200 to-transparent py-10 '>
            <div className=' flex container mx-auto items-center px-20 xs:px-10 '>
                <div className="flex-1 ">
                    <h2 className='lg:text-3xl font-semibold md:text-2xl sm:text-xl xs:text-xl'>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="first flex items-center">
                            <p className='lg:text-7xl md:text-5xl font-semibold md:leading-tight lg:leading-tight sm:text-5xl sm:leading-tight xs:text-4xl xs:leading-tight'>New</p>
                            <img src={hand_icon} alt="" className='w-16 md:w-12 md:mx-2 sm:w-8 xs:w-9' />
                        </div>
                        <p className='lg:text-7xl md:text-5xl font-semibold md:leading-tight lg:leading-tight sm:text-5xl sm:leading-tight xs:text-4xl xs:leading-tight'>Collections</p>
                        <p className='lg:text-7xl md:text-5xl font-semibold md:leading-tight lg:leading-tight sm:text-5xl sm:leading-tight xs:text-4xl xs:leading-tight'>For Everyone</p>
                    </div>

                    <button className="inline-flex py-3 px-4 justify-center items-center bg-red-600 rounded-full my-3  text-white xs:py-2 xs:px-3">Latest collection <img src={arrow_icon} className='h-3 mx-2 ' /></button>

                </div>
                <div className=" flex-1 lg:flex lg:justify-end md:pl-6 md:flex hidden  ">
                    <img src={Hero_png} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero
