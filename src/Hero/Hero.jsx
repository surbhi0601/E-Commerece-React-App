import React from 'react'
import hand_icon from '../components/assets/hand_icon.png'
import arrow_icon from '../components/assets/arrow.png'
import hero_img from '../components/assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero flex justify-between items-center h-[100vh] '>
            <div className="hero-left    ">
                <h2 className='text-2xl font-semibold'>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon ">
                        <div className="first flex items-center">
                            <p className='text-7xl font-semibold'>new</p>
                            <img src={hand_icon} alt="" className='w-16' />
                        </div>
                        <p className='text-7xl font-semibold'>collections</p>
                        <p className='text-7xl font-semibold'>For Everyone</p>
                    </div>
                </div>
                <div className="hero-latest-collection">
                    <div className='py-3 px-5 bg-red-600 rounded-full'>latest collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right ">
                <img src={hero_img} alt="" />
            </div>

        </div>
    )
}

export default Hero
