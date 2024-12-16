import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const NotFound = () => {
  return (
    <div className='bg-white'>


<div className='bg-white'>
         <div className='h-[90px] bg-[#0d0d0d] flex justify-between items-center  '><Link href={"/"}> <h1 className='ml-40 text-[24px] font-bold text-[#ff9f0d]'>Foodtuck</h1></Link>
      <ul className='flex gap-8'>
      <Link href={"/"}>  <li className='text-[#ff9f0d]'>Home</li></Link>
        <Link href={"/menu"}><li>Menu</li></Link>
        <Link href={"/blog"}> <li>Blog</li></Link>
        <Link href={"/pages"}><li>Pages</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"/shop"}> <li>Shop</li></Link>
        <Link href={"/contact"}> <li>Contact</li></Link>
      </ul>
      <div className='flex mr-40 gap-8'>
        <Image src={"/mg1.png"} alt='logo' height={24} width={24}/>
        <Image src={"/mg2.png"} alt='logo' height={24} width={24}/>
       <Link href={"/cart"}> <Image src={"/mg3.png"} alt='logo' height={24} width={24}/></Link>
      </div></div>
      <div className='bg-headImg bg-no-repeat bg-cover bg-bottom h-[410px]'>
        <div className='flex justify-center items-center h-[410px]'>
        <Image  src={"/ert.png"} alt='logo' height={104} width={219} />
        </div>
      </div>
      
    </div>













<div className='flex justify-center  mt-10 '>
   <div className='w-[630px] h-[442px] bg-white text-black flex flex-col items-center space-y-4'>
    
    <h1 className='font-bold text-[96px] text-[#ff9f0d]' >404</h1>
    <h1 className='font-bold text-[32px] '>Oops! Look likes something going wrong</h1>
    <p className='w-[490px] text-[18px]'>Page Cannot be found! we all have it figured out in no time.
    Menwhile, cheek out these fresh ideas:</p>
   <Link href={"/"}> <button className='w-[197px] h-[58px] bg-[#ff9f0d] text-white rounded-[6px] font-bold text-[18px]'>Go to home</button></Link>
    </div>
   </div>
    </div>
  )
}

export default NotFound
