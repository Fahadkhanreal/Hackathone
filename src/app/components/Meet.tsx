import React from 'react'
import Image from 'next/image'

const Meet = () => {
  return (
    <div className='h-[657px] mt-20 '>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-[32px] text-[#ff9f0d]'>Chefs</h1>
        <h1 className='font-bold text-[48px] text-[#ff9f0d] mb-8' >Meet our Home</h1>
        </div>

        <div>
            <div className='flex justify-center gap-6 mb-6'>
                <Image src={"/d1.png"} alt='logo' width={312} height={391}/>
                <Image src={"/d2.png"} alt='logo' width={312} height={391}/>
                <Image src={"/d3.png"} alt='logo' width={312} height={391}/>
                <Image src={"/d4.png"} alt='logo' width={312} height={391}/>
            </div>
            <div className='flex justify-center'>
            <button className='w-[155px] h-[50px] rounded-[25px] border-[1px] border-[#ff9f0d]'>See More</button>
            </div>
        </div>
      
    </div>
  )
}

export default Meet
