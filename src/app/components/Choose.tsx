import React from 'react'
import Image from 'next/image'

const Choose = () => {
  return (
    <div className='flex items-center justify-center '>
        <div className='h-[716px]  flex flex-col w-[1920px] justify-center items-center '>
      <div className='flex  flex-row gap-4'>
  <Image src={"/m1.png"} alt='logo' height={362} width={356} />
  <Image className='mt-14 '  src={"/m2.png"} alt='logo' height={231} width={281} />
     </div>
     


<div className='flex flex-row gap-4 mt-4  '>
    <Image src={"/m3.png"} alt='logo' height={244} width={306} />
    <Image className='mb-28' src={"/m4.png"} alt='logo' height={221} width={226} />
    <div className='flex flex-col gap-4'>
        <Image src={"/m5.png"} alt='logo' height={166} width={161} />
        <Image src={"/m6.png"} alt='logo' height={166} width={161} />

    </div>

</div>
</div>
<div className=' flex flex-col justify-center gap-8  mr-20     h-[716]  '><h1 className='text-[32px] text-[#ff9f0d]  '>Why Choose Us</h1>

    <h1 className='text-[#ff9f0d]  font-bold text-[48px] '>Extra ordinary taste And Experienced</h1>
    <span> </span>
<p className='w-[500]  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

<div className='flex gap-4 '>
    <div className='h-[100px] w-[102px] bg-[#ff9f0d] flex flex-col items-center rounded-[6px] justify-center'>
    <Image src={"/r1.png"}  alt='logo' height={56} width={56}/>
    <h1 className='text-black'>Fast Food</h1>
    </div>
    <div className='h-[100px] w-[102px] bg-[#ff9f0d] flex flex-col items-center rounded-[6px] justify-center'>
    <Image src={"/r2.png"}  alt='logo' height={56} width={56}/>
    <h1  className='text-black'>Lunch</h1>
    </div>
    <div className='h-[100px] w-[102px] bg-[#ff9f0d] flex flex-col items-center rounded-[6px] justify-center'>
    <Image  src={"/r3.png"}  alt='logo' height={56} width={56}/>
    <h1  className='text-black'>Dinner</h1>
    </div>
</div >
    <div ><Image  src={"/r4.png"} alt='logo' width={374} height={93} /></div>

</div>
    </div>
  )
}

export default Choose
