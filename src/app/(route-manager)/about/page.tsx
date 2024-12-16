import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AboutUs from '@/app/components/About-us'

const AboutPage = () => {
  return (
    <div className='bg-white'>
         <div className='h-[90px] bg-[#0d0d0d] flex justify-between items-center  '><Link href={"/"}> <h1 className='ml-40 text-[24px] font-bold text-[#ff9f0d]'>Foodtuck</h1></Link>
      <ul className='flex gap-8'>
      <Link href={"/"}>  <li >Home</li></Link>
        <Link href={"/menu"}><li>Menu</li></Link>
        <Link href={"/blog"}> <li>Blog</li></Link>
        <Link href={"/pages"}><li>Pages</li></Link>
        <Link href={"/about"}><li className='text-[#ff9f0d]'>About</li></Link>
        <Link href={"/shop"}> <li>Shop</li></Link>
        <Link href={"/contact"}> <li>Contact</li></Link>
      </ul>
      <div className='flex mr-40 gap-8'>
        <Image src={"/mg1.png"} alt='logo' height={24} width={24}/>
        <Link href={"/signup"}><Image src={"/mg2.png"} alt='logo' height={24} width={24}/></Link>
       <Link href={"/cart"}> <Image src={"/mg3.png"} alt='logo' height={24} width={24}/></Link>
      </div></div>
      <div className='bg-headImg bg-no-repeat bg-cover bg-bottom h-[410px]'>
        <div className='flex justify-center items-center h-[410px]'>
        <Image  src={"/lki.png"} alt='logo' height={104} width={219} />
        </div>
      </div>

      <AboutUs />
    </div>




  )
}

export default AboutPage