import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ShopPage = () => {
  return (
    <div >
      <div className='flex items-center justify-center mr-[650px]  mt-20  bg-white text-black '>
        <label className='text-[#333333]' htmlFor="Text" id='sort'>Sort By :</label>
        <input  className='h-[46] w-[236] ml-2 pl-4 border-[1px] ' type="text"  id="sort" placeholder='Newest' />

        <label className='ml-10 text-[#333333]' htmlFor="Text" id='show'>Show :</label>
        <input className='h-[46] w-[236] ml-2 pl-4 border-[1px]' type="text"  id="show" placeholder='Default' />
      </div>



      <div className='flex  justify-center '>
        <div className='text-black grid grid-cols-3 h-[1923] w-[1020]   place-items-center'> 
       <div><Image src={"/gr1.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr2.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr3.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr4.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr5.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr6.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr7.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr8.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr9.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr10.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr11.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr12.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr13.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr14.png"} alt='logo' width={312} height={330} /></div>
       <div><Image src={"/gr15.png"} alt='logo' width={312} height={330} /></div>
       
       
       
       </div>
       
       
     <div className='mt-6'>
        <Image src={"/sideb.png"} alt='logo' height={1489} width={312} />
     </div> 
      </div>
       <div className='flex justify-center gap-2 mt-10 pb-8 '>
       <Link href={"/"}><button className='w-[50px] h-[50px] border-[1px] border-[#ff9f0d] '><Image className='ml-4' src={"/yu.png"} alt='logo' height={17} width={14} />  </button></Link>
       
       <Link href={"/shop/details"}> <button className='w-[50px] h-[50px] border-[1px] border-[#ff9f0d] hover:bg-[#ff9f0d] text-[#ff9f0d] hover:text-white'>1</button></Link>
       
      <Link href={"/shop/details"} >  <button className='w-[50px] h-[50px] border-[1px] border-[#ff9f0d] hover:bg-[#ff9f0d]  text-[#ff9f0d] hover:text-white'>2</button></Link>
       
      <Link href={"/shop/details"} >  <button className='w-[50px] h-[50px] border-[1px] border-[#ff9f0d] hover:bg-[#ff9f0d]  text-[#ff9f0d] hover:text-white' >3</button></Link>
        
      <Link href={"/shop/details"} >  <button className='w-[50px] h-[50px] border-[1px] border-[#ff9f0d] '><Image className='ml-4' src={"/yu1.png"} alt='logo' height={17} width={14} /></button></Link>
       </div>
    </div>
  )
}

export default ShopPage
