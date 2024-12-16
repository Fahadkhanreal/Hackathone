import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SignUp = () => {
  return (
    <div>
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
        <Link href={"/signup"}>  <Image src={"/mg2.png"} alt='logo' height={24} width={24}/></Link>
       <Link href={"/cart"}> <Image src={"/mg3.png"} alt='logo' height={24} width={24}/></Link>
      </div></div>
      <div className='bg-headImg bg-no-repeat bg-cover bg-bottom h-[410px]'>
        <div className='flex justify-center items-center h-[410px]'>
        <Image  src={"/sign.png"} alt='logo' height={104} width={219} />
        </div>
      </div>
      
    </div>

    <div className='bg-white text-black flex justify-center items-center  h-[800]'>
      <div className='h-[624] w-[424] border  flex bg-[#ffffff] shadow-xl '>
        
           

            <div className='flex flex-col m-8 space-y-5'>
            <h1 className='font-bold text-[20px]'>Sign up</h1>
            <div className='flex ' >
               <input className='bg-perImg bg-no-repeat bg-left  pl-8 h-[44px] w-[360px] border ' type="text" placeholder='Name' />
               </div>
               <div >
               <input className='bg-ema bg-no-repeat bg-left  pl-8 h-[44px] w-[360px] border' type="text" placeholder='Email' />
               </div>
               <div >
               <input className='bg-loc bg-no-repeat bg-left  pl-8 h-[44px] w-[360px] border' type="text" placeholder='Password' />
               </div>
               <div>
                <input type="checkbox" />
                <span className='ml-2 text-[#4f4f4f]'>Remember me?</span> </div>
              <Link href={"/signup/signin"}>  <button className='w-[360px] h-[44] bg-[#ff9f0d] text-white'>Sign up</button></Link>
               
                <h1 className='text-[#828282] text-right'>Forget password?</h1>
                <Image  src={"/or.png"}  alt='logo' height={32} width={360} />
      <div className='flex flex-col gap-4 '>
        <button className='flex h-[44] text-[#4f4f4f] w-[360] border justify-center items-center gap-4'> <Image  src={"/gog1.png"} alt='logo' height={20}  width={20}/> Sign up with Google </button>
        <button className='flex h-[44] text-[#4f4f4f] w-[360] border justify-center items-center gap-4'> <Image  src={"/apil.png"} alt='logo' height={20}  width={20}/> Sign up with Google </button>
      </div>
                
            </div>
        

      </div>
    </div>
    </div>
  )
}

export default SignUp
