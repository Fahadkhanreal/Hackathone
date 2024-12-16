import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div>
      <div className='flex justify-center' >
        <div className='w-[562px] h-[562px] flex flex-col m-6 gap-4 '>
            <h1 className='text
            -[32px] text-[#ff9f0d]'>About us</h1>
            <div className='flex flex-col font-bold text-[48px]  ' >
                <h1 className='text-[#ff9f0d] '>We</h1>
                <h1  > Create the best foody product</h1>
            </div>
            <p className='h-[130px] w-[526px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div> Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
            <div>  Quisque diam pellentesque bibendum non dui volutpat fringilla .</div>
            <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

            <button className='w-[190px] h-[60px] rounded-[30px]  bg-[#ff9f0d] text-white
            '>Read More</button>

        </div>
        
        
        
        
        
        
       
        <div className='flex flex-col justify-center gap-2'>
            <Image src={'/f1.png'} alt='logo' width={660} height={330}  />
           <div className='flex gap-2'>
            <Image  src={"/f2.png"}  alt='logo' width={322} height={194}/>
            <Image src={"/f3.png"}  alt='logo' width={322} height={194}/></div>
            </div>
        </div>
        

      </div>
    
  )
}

export default About
