import React from 'react'
import Image from 'next/image'
const Faq = () => {
  return (
    <div className='text-black' >
      
      
      
      
      
      
      
      
      
      
      
      <div className='flex flex-col items-center space-y-4 mt-10 '>
<h1 className='font-bold text-[48px]'>Questions Looks Here</h1>
<p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
</div>
   <div className='flex justify-center mt-8 '>
    <div className='w-[1320px] h-[658px] grid grid-cols-2'>
        <div><Image src={"/qw1.png"} alt='logo' height={170} width={648} /></div>
        <div><Image src={"/qw2.png"} alt='logo' height={170} width={648} /></div>
        <div><Image src={"/qw3.png"} alt='logo' height={170} width={648} /></div>
        <div><Image src={"/qw4.png"} alt='logo' height={170} width={648} /></div>
        <div><Image src={"/qw5.png"} alt='logo' height={170} width={648} /></div>
        <div><Image src={"/qw6.png"} alt='logo' height={170} width={648} /></div>

    </div>
   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   </div>
  )
}

export default Faq
