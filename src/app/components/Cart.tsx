import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <div>
      
      <div className='flex flex-col justify-center items-center text-black'>
        <div className='grid   grid-cols-5  h-[765]  place-items-center mt-10'>
   
        <div className='text-[18px] font-bold'>Product</div>
        <div className='text-[18px] font-bold'>Price</div>
        <div className='text-[18px] font-bold'>Quantity</div>
        <div className='text-[18px] font-bold'>Total</div>
        <div className='text-[18px] font-bold'>Remove</div>
        <div><Image src={"/bgf.png"} alt='logo' height={97} width={225} />
        <div></div>
        </div>
        <div>$35.00</div>
        <div><Image src={"/cfg.png"} alt='logo' height={32} width={110} /></div>
        <div>$221.00</div>
        <div><Image src={"/x.png"} alt='logo' height={20} width={20} /></div>
        <div><Image src={"/bgf.png"} alt='logo' height={97} width={225} /></div>
        <div>$25.00</div>
        <div><Image src={"/cfg.png"} alt='logo' height={32} width={110} /></div>
        <div>#521.00</div>
        <div><Image src={"/x.png"} alt='logo' height={20} width={20} /></div>
        <div><Image src={"/bgf.png"} alt='logo' height={97} width={225} /></div>
        <div>$15.00</div>
        <div><Image src={"/cfg.png"} alt='logo' height={32} width={110} /></div>
        <div>$421.00</div>
        <div><Image src={"/x.png"} alt='logo' height={20} width={20} /></div>
        <div><Image src={"/bgf.png"} alt='logo' height={97} width={225} /></div>
        <div>$45.00</div>
        <div><Image src={"/cfg.png"} alt='logo' height={32} width={110} /></div>
        <div>$521.00</div>
        <div><Image src={"/x.png"} alt='logo' height={20} width={20} /></div>
        <div><Image src={"/bgf.png"} alt='logo' height={97} width={225} /></div>
        <div>$15.00</div>
        <div><Image src={"/cfg.png"} alt='logo' height={32} width={110} /></div>
        <div>$325.00</div>
        <div><Image src={"/x.png"} alt='logo' height={20} width={20} /></div>



            


        </div>
      </div>


<div className='h-[438px] mt-20 text-black'>
    <div className='flex justify-center items-center gap-12'>
        <div className=''>
            <h1 className='font-bold text-[32px]'>Coupon Code</h1>
            <div className='w-[648px] h-[188px] border-2 flex flex-col justify-center gap-4 '>
            <p className='w-[472] ml-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
            <div><Image className='ml-8' src={"/ghj.png"} alt='logo' width={598} height={62}/></div>
            </div>
        </div>
        
        
        <div>
            <h1 className='font-bold text-[32px]' >Total Bill</h1>
            <div className='w-[648] h-[185] border-2'>
                <div className='m- space-y-4'>
                    <div className='flex justify-between m-6'>
                        <h1 className='font-bold text-[20px]'>Cart Subtotal</h1>
                        <h2 className='text-[18px] font-bold'>$120.00</h2>
                    </div>
                    <div className='flex justify-between m-6'>
                        <h1 className='text-[18px] text-[#4f4f4f]'>Shipping Charge</h1>
                        <h2 className='text-[#4f4f4f] ' >$00.00</h2>
                    </div>
                        <div className='w-[648] border-[1px]'></div>
                        <div className='flex justify-between m-6'>
                        <h1 className='font-bold text-[20px]'>Total Amount</h1>
                        <h2 className='text-[18px] font-bold'>$205.00</h2>
                    </div>
                    <div ><button className=' mt-10 flex justify-center items-center w-[648px] h-[64px] bg-[#ff9f0d] text-white'>Proceed to Checkout <Image className='ml-4' src={"/jo.png"} alt='logo' height={20} width={20} /></button></div>
               
               
                </div>
            </div>
        </div>
    </div>
</div>
   
   
    </div>
  )
}

export default Cart
