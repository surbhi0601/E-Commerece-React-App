import React from 'react'

function LoginSingup() {
  return (
    <div className=' bg-rose-100 py-24 mb-20'>
       <div className='w-1/3 mx-auto bg-white p-10   '>
         <p className='text-2xl font-semibold mb-5'>Sign Up</p>
         <div className='flex flex-col gap-y-7'>
         <input type="text" placeholder='Enter Your Name' className='border border-black border-dotted py-3 px-3 outline-none' />
         <input type="email" placeholder='Email Address' className='border border-black border-dotted py-3 px-3 outline-none'/>
         <input type="password" placeholder='Password' className='border border-black border-dotted py-3 px-3 outline-none'/>
         </div>
         <button className='w-full my-3 py-3 bg-rose-400 text-lg text-white'>Continue</button>
         <p className='text-sm'>Already Have an Account ? <span className='text-rose-500 font-semibold'>Login Here</span></p>
       <div className='flex text-sm pt-3'>
        <input type="checkbox"  className='mr-2' />
        <p >By Continuing. I agree to terms of Use & Privacy Policy</p>
       </div>
       </div>
    </div>
  )
}

export default LoginSingup
