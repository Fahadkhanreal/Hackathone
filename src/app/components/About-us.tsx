import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="text-black">
      <div className="flex justify-center items-center  h-[734px]  gap-10 mt-20">
        <div className="flex gap-4">
          <div>
            <Image src={"/jh1.png"} alt="logo" height={536} width={336} />
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <Image src={"/jh2.png"} alt="logo" height={271} width={309} />
            <Image src={"/jh3.png"} alt="logo" height={382} width={309} />
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-[18px] text-[#ff9f0d]">About us </h1>
            <h1 className="font-bold text-[48px] w-[524px]">
              Food is an important part Of a balanced Diet
            </h1>
            <p className="w-[526]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>

            <div className="flex items-center gap-2">
              <button className="w-[195px] h-[58px] rounded-[6px] text-white bg-[#ff9f0d]">
                Read More
              </button>
              <Image src={"/t6.png"} alt="logo" height={60} width={60} />
              <h1 className="font-bold">Watch Video</h1>
            </div>
          </div>
        </div>
      </div>
      
      
      
      <div>
       
       
        <div className=" flex flex-col items-center mt-20">
          <h1 className="font-bold text-[48px]">Why Choose us</h1>
          <p className="w-[579] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
          <Image className="mt-10" src={"/kj1.png"} alt="logo" height={386} width={1320} />
          
          <div className="flex space-x-16 mt-20">
           
            <div className="w-[359px] h-[225px] flex flex-col items-center gap-2 text-center">
            <Image src={"/kh1.png"} alt="logo" height={80} width={80} />
            <h1 className="font-bold text-[24px]">Best Chef</h1>
            <p className="w-[359px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
            
            
            
            
            <div className=" h-[225px] w-[359px] flex flex-col items-center gap-2 text-center ">
            <Image src={"/kh2.png"} alt="logo" height={80} width={80} />
            <h1 className="font-bold text-[24px]">120 item food</h1>
            <p className="w-[359px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
            
            <div className="w-[359px] h-[225px] flex flex-col items-center gap-2 text-center   ">
            <Image src={"/kh3.png"} alt="logo" height={80} width={80} />
            <h1 className="font-bold text-[24px]">Clean Enviroment</h1>
            <p className="w-[359px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>

          </div>
        </div>



<div className="bg-bagImg bg-no-repeat bg-cover bg-bottom flex justify-center h-[460px]"> 
  
  <div className="flex flex-col justify-center items-center">
    
    <h1 className="font-bold text-[48px] text-white">Team Member</h1>
    <p className=" text-white w-[418px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Varius sed pharetra dictum neque massa congue</p>
    
    
  </div>
  
     

 
</div>

<div className="flex justify-center items-center  ">
   <Link href={"/chef"}> <Image className="transition-transform duration-300 ease-in-out hover:scale-125"  src={"/lko.png"} alt="logo" height={398} width={312} /></Link>
   <Link href={"/chef"}> <Image className="transition-transform duration-300 ease-in-out hover:scale-125"  src={"/lko1.png"} alt="logo" height={398} width={312}  /></Link>
   <Link href={"/chef"}> <Image className="transition-transform duration-300 ease-in-out hover:scale-125"  src={"/lko3.png"} alt="logo" height={398} width={312} /></Link>
   <Link href={"/chef"}> <Image className="transition-transform duration-300 ease-in-out hover:scale-125"  src={"/lko4.png"} alt="logo" height={398} width={312} /></Link>
    </div>
     
      </div>
     
     
    
    
    
    
      <div className='h-[770px] '>
        <div className='ml-16'>
            <h1 className='text-[32px] text-[#ff9f0d]'>Testimonials</h1>
            <h1 className='text-[48px] '>What our Client are Saying</h1>
        </div>
<div className='flex justify-center '>
    
    
        <div className='w-[868px] shadow-md h-[450px] bg-white flex flex-col  items-center text-black  gap-2 mt-16'>
    <Image src={"/t1.png"} alt='logo' height={132} width={133} />
    <Image src={"/t2.png"} alt='logo' height={47} width={47} />
    <p className='w-[696px] text-[18px] text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    < Image src={"/t3.png"} alt='logo' height={23} width={151} />
    <h1 className='text-[24px] font-bold'>Alamin Hasan</h1>
    <h3 className='text-[828282]'>Food Specalist</h3>

        </div>
        </div>
      <div className='flex justify-center mt-8'><Image src={"/t4.png"} alt='logo' height={16} width={86} /></div>
    </div>
    
    
    <div className="flex justify-center flex-col items-center h-[941px]"> 
      <h1 className="font-bold  text-[48px]">Our Food Menu</h1>
      <p  className="w-[418px] text-center mb-16 text-[#4f4f4f]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Varius sed pharetra dictum neque massa congue</p>
      <ul className="flex gap-10 mb-8 text-[#4f4f4f] text-[20px] " >
        <li className="hover:text-[#ff9f0d] hover:underline cursor-pointer ">Breakfast</li>
        <li className="hover:text-[#ff9f0d] hover:underline cursor-pointer">Lunch</li>
        <li className="hover:text-[#ff9f0d] hover:underline cursor-pointer">Dinner</li>
        <li className="hover:text-[#ff9f0d] hover:underline cursor-pointer">Dessert</li>
        <li className="hover:text-[#ff9f0d] hover:underline cursor-pointer ">Drink</li>
        <li className="hover:text-[#ff9f0d] hover:underline cursor-pointer">snack</li>
      </ul>
      <div className="w-[1320px] border "></div>
      
      
      
      <div className="flex justify-center">
       
    <div  className="grid grid-cols-2 w-[1320px] h-[532px] place-items-center gap-x-10">
          <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d] ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>
          
          
          
          
          
          
          <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>
          
          <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>
          <div className="w-[648px] h-[111px] border-b space-y-2 ">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>
          <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>
           <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>


          <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>


          <div className="w-[648px] h-[111px] border-b space-y-2">
            <div className="flex items-center  ">
            <p className="font-bold text-[24px] w-[648] hover:text-[#ff9f0d]  ">Alder Grilled Chinook Salmon</p>
            <span className="text-[#ff9f0d] font-bold text-[24px]">$32</span>
            </div>
            <p className="text-[#4f4f4f]">Toasted French bread topped with romano, cheddar</p>
            <h1 className="text-[#4f4f4f]">560 CAL</h1>
            
            

          </div>




          
          
        </div>
      
      
      
      </div>
           <div > <button className="w-[143] hover:text-white  hover:bg-[#ff9f0d] mt-20 mb-28 h-[52] border border-[#ff9f0d] text-[#ff9f0d]">View Menu</button></div>
      </div>
    
    
    </div>
  );
};

export default AboutUs;
