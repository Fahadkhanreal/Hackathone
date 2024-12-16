import React from 'react'
import Image from 'next/image'

const Blog = () => {
    return (
        <div>
            <div className='h-[732px] mt-20'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[32px] text-[#ff9f0f]'>Blog Post</h1>
                    <h1 className='font-bold text-[48px]'>Latest News & Blog</h1>
                </div>

                <div className='flex justify-center gap-6 mt-20'>

                    <div className='flex flex-col '>
                        <div className='mb-4'> <Image src={"/c1.png"} alt='logo' height={349} width={423} /></div>
                        <h4 className='mb-4 text-[#ff9f0d]'>10 February 2022</h4>
                        <p className='w-[338px] mb-6 font-bold text-[24px]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                        <div className='flex  gap-40'>
                            <h3>Learn More</h3>
                            <Image src={"/c7.png"} alt='logo' height={20} width={76} />
                        </div>





                    </div>
                    <div className='flex flex-col '>
                        <div className='mb-4'> <Image src={"/c1.png"} alt='logo' height={349} width={423} /></div>
                        <h4 className='mb-4 text-[#ff9f0d]'>10 February 2022</h4>
                        <p className='w-[338px] mb-6 font-bold text-[24px]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                        <div className='flex  gap-40'>
                            <h3>Learn More</h3>
                            <Image src={"/c7.png"} alt='logo' height={20} width={76} />
                        </div>





                    </div>

                    <div className='flex flex-col '>
                        <div className='mb-4'> <Image src={"/c1.png"} alt='logo' height={349} width={423} /></div>
                        <h4 className='mb-4 text-[#ff9f0d]'>10 February 2022</h4>
                        <p className='w-[338px] mb-6 font-bold text-[24px]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
                        <div className='flex  gap-40'>
                            <h3>Learn More</h3>
                            <Image src={"/c7.png"} alt='logo' height={20} width={76} />
                        </div>





                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Blog




