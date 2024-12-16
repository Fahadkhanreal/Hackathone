import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div>
      <div className='flex justify-center items-center m-6 gap-10'>
        <div className='h-[456px] w-[472px] flex flex-col  justify-center items-center m-4 gap-'>
            <h1 className='text-[32px] text-[#ff9f0d]'>Its Quick & Amusing!</h1> 
            <div className='flex font-bold text-[60px] mb-6'>
            <h1 className='text-[#ff9f0d]'>Th</h1>
            <h1 className=''> e Art of speed
            food Quality</h1>
            </div>
            <p className='flex items-center mb-6  w-[418px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
            <button className='m-2 w-[190px] h-[60px] rounded-[30px] bg-[#ff9f0d] text-white '>See Menu</button>
        </div>
        
        
        
        <div className='flex '> 
             <Image  src={"/e1.png"} alt='logo' width={641.15} height={578.3} />
             
        </div>
      </div>
    </div>
  )
}

export default Hero