import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div>
    <div className='h-[770px]'>
        <div className='ml-16'>
            <h1 className='text-[32px] text-[#ff9f0d]'>Testimonials</h1>
            <h1 className='text-[48px] '>What our Client are Saying</h1>
        </div>
<div className='flex justify-center '>
    
    
        <div className='w-[868px] h-[450px] bg-white flex flex-col  items-center text-black  gap-2 mt-16'>
    <Image src={"/t1.png"} alt='logo' height={132} width={133} />
    <Image src={"/t2.png"} alt='logo' height={47} width={47} />
    <p className='w-[696px] text-[18px] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    < Image src={"/t3.png"} alt='logo' height={23} width={151} />
    <h1 className='text-[24px] font-bold'>Alamin Hasan</h1>
    <h3 className='text-[828282]'>Food Specalist</h3>

        </div>
        </div>
      <div className='flex justify-center mt-8'><Image src={"/t4.png"} alt='logo' height={16} width={86} /></div>
    </div>

    <div className="bg-bannerImg bg-no-repeat bg-cover bg-bottom  h-[558px]  ">


        <div className='flex flex-col items-end justify-center text-right h-[558px] gap-8 mr-56'>
            <h1 className='text-[32px] text-[#ff9f0d]'>Restaurant Active Process</h1>
            <h1 className='font-bold text-[48px] w-[705px]'>We Document Every Food
            Bean Process untile it is saved</h1>
            <p className='w-[651px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
            <div className='flex items-center gap-2'>
            <button className='w-[190px] h-[60px] rounded-[30px] border-[1px] border-[#ff9f0d]'>Read More</button>
            <Image src={"/t6.png"} alt='logo' height={60} width={60}/>
            Play Video
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Testimonials
