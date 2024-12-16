import React from 'react'
import Image from 'next/image'

const Category = () => {
  return (
    <div>
      <div className='h-[703px]  flex flex-col justify-center items-center'>
        <h1 className='text-[32px]'>Food Category</h1>
        <div className='flex font-bold text-[48px]'>
            <h1 className='text-[#ff9f0d]'>Ch</h1>
            <h1>oose Food Item</h1>
        </div>
        <div className='flex gap-4'>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110"> <Image  src={"/p1.png"} alt='logo' width={305} height={328}/></div>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110"> <Image  src={"/p2.png"} alt='logo' width={306} height={329}/></div>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110"> <Image  src={"/p3.png"} alt='logo' width={306} height={329}/></div>
            <div className="transition-transform duration-300 ease-in-out hover:scale-110"> <Image  src={"/p4.png"} alt='logo' width={306} height={329}/></div>
        </div>

      </div>
    </div>
  )
}

export default Category
