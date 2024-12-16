import React from 'react'
import Image from 'next/image'

const OurMenu = () => {
    return (
        <>
            <div className=' mt-24 '>
                <div className='h-[628px] flex justify-center'>
                    <div>
                        <Image src={"/rt1.png"} alt='logo' height={626} width={448} />
                    </div>



                    <div >
                        <div className='ml-40 '>
                            <Image src={"/tt.png"} alt='logo' height={24} width={24} />
                            <h1 className='font-bold text-[48px] text-black'>Starter Menu</h1>
                            <Image src={"/kl.png"} alt='logo' height={111} width={760} />
                            <Image src={"/k2.png"} alt='logo' height={111} width={760} />
                            <Image src={"/k3.png"} alt='logo' height={111} width={760} />
                            <Image src={"/k4.png"} alt='logo' height={111} width={760} />
                        </div>

                    </div>

                </div>
            </div>
            <div className='h-[628] bg-white text-black flex justify-center mt-24 gap-40' >
                <div>
                    <Image src={"/fg.png"} alt='logo' height={24} width={24} />
                    <h1 className='font-bold text-[48px]' >Main Course</h1>
                    <Image src={"/ex1.png"} alt='logo' height={111} width={760} />
                    <Image src={"/ex2.png"} alt='logo' height={111} width={760} />
                    <Image src={"/ex3.png"} alt='logo' height={111} width={760} />
                    <Image src={"/ex4.png"} alt='logo' height={111} width={760} />
                </div>
                <div className=''><Image src={"/lo1.png"} alt='logo' height={626} width={448} /></div>


            </div>
            <div className='bg-black '>
                <div className='flex justify-center items-center h-[468] bg-black gap-36'>
                    <Image src={"/jk1.png"} alt='logo' height={255} width={218} />
                    <Image src={"/jk2.png"} alt='logo' height={255} width={162} />
                    <Image src={"/jk3.png"} alt='logo' height={255} width={248} />
                    <Image src={"/jk4.png"} alt='logo' height={255} width={206} />
                </div>
            </div>
            <div className='text-black'>
                <div className='h-[628px] flex justify-center gap-40 mt-24'>
                    <div> <Image src={"/me3.png"} alt='logo' height={626} width={448} /></div>

                    <div>
                        <Image src={"/me1.png"} alt='logo' height={24} width={24} />
                        <h1 className='font-bold text-[48px]' >Dessert</h1>
                        <Image src={"/me2.png"} alt='logo' height={111} width={760} />
                        <Image src={"/me2.png"} alt='logo' height={111} width={760} />
                        <Image src={"/me5.png"} alt='logo' height={111} width={760} />
                        <Image src={"/me6.png"} alt='logo' height={111} width={760} />
                    </div>

                </div>


            </div>

            <div className='text-black'>
                <div className='h-[628] flex justify-center gap-40 mt-24'>
                    <div >
                        <Image src={"/i1.png"} alt='logo' height={24} width={24} />
                        <h1 className='text-[48px] font-bold'>Drinks</h1>
                        < Image src={"/i2.png"} alt='logo' height={111} width={760} />
                        < Image src={"/i3.png"} alt='logo' height={111} width={760} />
                        < Image src={"/i4.png"} alt='logo' height={111} width={760} />
                        < Image src={"/i5.png"} alt='logo' height={111} width={760} />
                    </div>

                    <div> <Image src={"/i6.png"} alt='logo' height={626} width={448} /></div>
                </div>


            </div>
            
            <div className=' text-black '>
                <div className='h-[275px] mt-20 flex flex-col justify-center items-center '>
                    <h1 className='text-[18px]'>Partners $ Clients</h1>
                    <h1 className='font-bold text-[48px] '>We Work with the best People</h1>
                    <div className='mt-4'>
                    <Image src={"/ak.png"} alt='logo' height={119} width={1322} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurMenu
