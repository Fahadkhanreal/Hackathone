import React from "react";
import Header2 from "./Header2";
import Image from "next/image";
import Link from "next/link";

const Details = () => {
  return (
    <div className="bg-white">

<div className='bg-white'>
         <div className='h-[90px] bg-[#0d0d0d] flex justify-between items-center  '><Link href={"/"}> <h1 className='ml-40 text-[24px] font-bold text-[#ff9f0d]'>Foodtuck</h1></Link>
      <ul className='flex gap-8'>
      <Link href={"/"}>  <li >Home</li></Link>
        <Link href={"/menu"}><li>Menu</li></Link>
        <Link href={"/blog"}> <li>Blog</li></Link>
        <Link href={"/pages"}><li>Pages</li></Link>
        <Link href={"/about"}><li>About</li></Link>
        <Link href={"/shop"}> <li className='text-[#ff9f0d]'>Shop</li></Link>
        <Link href={"/contact"}> <li>Contact</li></Link>
      </ul>
      <div className='flex mr-40 gap-8'>
        <Image src={"/mg1.png"} alt='logo' height={24} width={24}/>
        <Image src={"/mg2.png"} alt='logo' height={24} width={24}/>
       <Link href={"/cart"}> <Image src={"/mg3.png"} alt='logo' height={24} width={24}/></Link>
      </div></div>
      <div className='bg-headImg bg-no-repeat bg-cover bg-bottom h-[410px]'>
        <div className='flex justify-center items-center h-[410px]'>
        <Image  src={"/ery1.png"} alt='logo' height={104} width={219} />
        </div>
      </div>
      
    </div>





      

      <div className="flex justify-center gap-20 mt-20 h-[900] text-black">
        <div className="flex justify-center gap-4">
          <div className="  space-y-4">
            <Image src={"/ry1.png"} alt="logo" height={129} width={132} />
            <Image src={"/ry1.png"} alt="logo" height={129} width={132} />
            <Image src={"/ry1.png"} alt="logo" height={129} width={132} />
            <Image src={"/ry1.png"} alt="logo" height={129} width={132} />
          </div>

          <div>
            <Image src={"/ry5.png"} alt="logo" height={596} width={491} />{" "}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className=" flex  justify-between">
            <h1 className="w-[86px] h-[28px] bg-[#ff9f0d] text-[white] text-[14px] rounded-[6px] p-1 pl-3">
              In Stock
            </h1>
            <div>
              <Image src={"/ki1.png"} alt="logo" height={26} width={152} />
            </div>
          </div>

          <h1 className="font-bold text-[48px]">yummy Chicken Chup</h1>
          <p className="w-[608] text-[18px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <h1 className="font-bold text-[32px]">54.00$ </h1>
          <div className="w-[618] border-b-[1px]"></div>

          <Image src={"/fgl.png"} alt="logo" width={333} height={24} />

          <h1 className="text-[18px]">Dictum/cursus/Risus</h1>
          <div className="flex">
            <Image src={"/coy.png"} alt="logo" width={181} height={50} />
            <button className="w-[191px] h-[50px] bg-[#ff9f0d] text-white flex justify-center items-center gap-2 ">
              {" "}
              <Image src={"/Bag.png"} alt="logo" width={20} height={20} />
              Add to Cart
            </button>
          </div>

          <div className="border-b-[1px] w-[618] "></div>

          <div className="flex gap-4">
            <Image src={"/hrt.png"} alt="logo" height={20} width={20} />
            <h1 className="text-[18px]">Add to WishList</h1>
            <Image src={"/hrt2.png"} alt="logo" height={20} width={20} />
            <h1 className="text-[18px]">Compare</h1>
          </div>
          <h1 className="text-[18px]">Category: Pizza</h1>
          <h1 className="text-[18px]">Tag: Our shop</h1>
          <div>
            <Image src={"/tyu.png"} alt="logo" width={250} height={26} />
          </div>

          <div className="border-b-[1px] w-[606]"></div>
        </div>
      </div>

      <div className="flex flex-col  gap-4 jus text-black h-[458px] ml-20">
        <div className="flex items-center gap-4">
          <button className="w-[165px] h-[50px] bg-[#ff9f0d] text-white">
            Description
          </button>
          <h1>Reviews (24)</h1>
        </div>
        <p className="text-[#828282] w-[1320px]">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget
          sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor.
          Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>

        <p className="text-[#828282] w-[1320px]">
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan
          et sagittis massa. Aliquam aliquam accumsan lectus quis auctor.
          Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula
          fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor
          sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>

        <h1 className="text-[18px]">Key Benefits</h1>
        <ul className="text-[14px] list-disc text-[#828282] pl-5 space-y-2 [&::marker]:text-blue-500 [&::marker]:w-4 [&::marker]:h-4 [&::marker]:inline-block [&::marker]:rounded-full">
          <li className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>
            Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
          </li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>
      <div className="h-[550px] text-black justify-center ">
            <h1 className="ml-20 font-bold text-[32px]" >Similar products</h1>
        <div className="flex items-center justify-end mr-20 mb-4">
            <button className="w-[40px] h-[39px] bg-[#faf7f2] pl-2 rounded-[100%] "><Image src={"/lef.png"} alt="logo" height={20} width={20} /></button>
            <button className="w-[40px] h-[39px] rounded-[100%] bg-[#ff9f0d] pl-2"><Image src={"/lef2.png"} alt="logo" height={20} width={20} /></button>
        </div>
        <div className="flex justify-center gap-4 ">
            <div><Image src={"/hjk.png"} alt="logo" width={312} height={330} /></div>
            <div><Image src={"/hjk1.png"} alt="logo" width={312} height={330} /></div>
            <div><Image src={"/hjk2.png"} alt="logo" width={312} height={330} /></div>
            <div><Image src={"/hjk3.png"} alt="logo" width={312} height={330} /></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
