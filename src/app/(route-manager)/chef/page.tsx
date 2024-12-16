import Header2 from '@/app/components/Header2'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ChefPage = () => {
  return (
    <>
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
        <Link href={"/signup"}> <Image src={"/mg2.png"} alt='logo' height={24} width={24}/> </Link>
       <Link href={"/cart"}> <Image src={"/mg3.png"} alt='logo' height={24} width={24}/></Link>
      </div></div>
      <div className='bg-headImg bg-no-repeat bg-cover bg-bottom h-[410px]'>
        <div className='flex justify-center items-center h-[410px]'>
        <Image  src={"/chif.png"} alt='logo' height={104} width={219} />
        </div>
      </div>
      
    </div>
   
   
   
    <div  className='flex justify-center items-center bg-white '>
        <div className='grid grid-cols-4 w-[1320] h-[1386] mt-32 mb-20'>
            <div ><Image  src={"/ce1.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce2.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce3.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce4.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce5.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce6.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce7.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce8.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce9.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce10.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce11.png"} alt='logo' height={446} width={312}/></div>
            <div><Image  src={"/ce12.png"} alt='logo' height={446} width={312}/></div>

        </div>
      
    </div>
    </>
  )
}

export default ChefPage
