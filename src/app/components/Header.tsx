import React from 'react'
import Image from 'next/image'

import Link from 'next/link';

const Header = () => {
  return (

    <div>
        <nav>
            <div className='flex justify-center font-bold text-[24px]'>
        <h1 className='flex text-[#ff9f0d] '>Food</h1>
        <h2>tuck</h2>
        </div>
        <div className='flex justify-center '>
            <ul className='flex gap-8 mr-20 items-center'>
               <Link href={"/"}> <li className='text-[#ff9f0d] '>Home</li></Link>
               <Link href={"/menu"}> <li className='hover:text-[#ff9f0d]'>Menu</li></Link>
               <Link href={"/blog"}> <li className='hover:text-[#ff9f0d]'>Blog</li></Link>
               <Link href={"/pages"}> <li className='hover:text-[#ff9f0d]'>Pages</li></Link>
               <Link href={"/about"}> <li className='hover:text-[#ff9f0d]'>About</li></Link>
                <Link href={"/shop"}><li className='hover:text-[#ff9f0d]'>Shop</li></Link>
               <Link href={"/contact"}> <li className='hover:text-[#ff9f0d]'>Contact</li></Link>
               
            </ul>
            
             <input  className='ml-48 rounded-[27px] border-[1px] border-[#ff9f0d] bg-black h-[52px] w-[310px] pl-4' placeholder='Search'  type="Search"   />
            <Link href={"/cart"}> <Image className='m-3' src={"/q5.png"} alt='logo' height={24} width={24}  /></Link>
        </div>
        </nav>

    </div>
  )
}

export default Header
