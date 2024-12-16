import React from "react";
import Image from "next/image";
import Link from "next/link";

const CheekoutPages = () => {
  return (
    <div className="bg-white">
      <div className="bg-white">
        <div className="h-[90px] bg-[#0d0d0d] flex justify-between items-center  ">
          <Link href={"/"}>
            {" "}
            <h1 className="ml-40 text-[24px] font-bold text-[#ff9f0d]">
              Foodtuck
            </h1>
          </Link>
          <ul className="flex gap-8">
            <Link href={"/"}>
              {" "}
              <li >Home</li>
            </Link>
            <Link href={"/menu"}>
              <li>Menu</li>
            </Link>
            <Link href={"/blog"}>
              {" "}
              <li>Blog</li>
            </Link>
            <Link className="text-[#ff9f0d]" href={"/pages"}>
              <li>Pages</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/shop"}>
              {" "}
              <li>Shop</li>
            </Link>
            <Link href={"/contact"}>
              {" "}
              <li>Contact</li>
            </Link>
          </ul>
          <div className="flex mr-40 gap-8">
            <Image src={"/mg1.png"} alt="logo" height={24} width={24} />
            <Link href={"/signup"}> <Image src={"/mg2.png"} alt="logo" height={24} width={24} /> </Link>
            <Link href={"/cart"}>
              {" "}
              <Image src={"/mg3.png"} alt="logo" height={24} width={24} />
            </Link>
          </div>
        </div>
        <div className="bg-headImg bg-no-repeat bg-cover bg-bottom h-[410px]">
          <div className="flex justify-center items-center h-[410px]">
            <Image src={"/pgh.png"} alt="logo" height={104} width={219} />
          </div>
        </div>
      </div>

      <div className="text-black  ">
        <div className="flex justify-center items-center gap-8">
          <div className="h-[723px] mt-10  ">
            <h1 className="font-bold text-[20px]">Shipping Address</h1>
            <div className="flex mt-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex flex-col">
                    <label id="name">First name</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Last name</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Email addres</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Phone number</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Company</label>
                    <input
                      className="w-[424] h-[44px] border "
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Country</label>
                    <input
                      className="w-[424] h-[44px] border pl-4"
                      type="text"
                      placeholder="Choose country"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">City</label>
                    <input
                      className="w-[424] h-[44px] border pl-4"
                      type="text"
                      placeholder="Choose City"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Zip code</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Address 1</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col">
                    <label id="name">Address 2</label>
                    <input
                      className="w-[424] h-[44px] border ml-"
                      type="text"
                      id="name"
                    />
                  </div>
                </div>

               
              </div>
              
            </div>
            <div>
                  <h1 className="font-bold text-20px mt-10">Billing Address</h1>
                  <input type="checkbox" />{" "}
                  <span>same as shipping address</span>
                  <div className="flex gap-4 mt-6">
                    <button className="w-[424px] h-[56px] border hover:bg-[#ff9f0d] hover:text-white">
                      {" "}
                      Back to cart
                    </button>
                    <button className="w-[424px] h-[56px] border text-black hover:bg-[#ff9f0d] hover:text-white">
                      Proceed to shipping
                    </button>
                  </div>
                </div>
          </div>

          <div>
            <div className="w-[424] h-[700px] border mt-4 p-4">
              <div className="space-y-6">
                <Image src={"/lkp.png"} alt="logo" height={104} width={376} />
                <Image src={"/lkp.png"} alt="logo" height={104} width={376} />
                <Image src={"/lkp.png"} alt="logo" height={104} width={376} />
              </div>

              <div className="space-y-6 mt-8">
                <div className="flex justify-between">
                  <span>sub-total</span>
                  <span>130$</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between ">
                  <span>Tax</span>
                  <span>54.76$</span>
                </div>
                <div className="w-[376] border"></div>
                <div className="flex justify-between ">
                  <span className="font-bold text-[18px]">Total</span>
                  <span className="text-[18px]">432.65$</span>
                </div>
              </div>
              <div>
                <button className="w-[376px] h-[58px] border hover:bg-[#ff9f0d] hover:text-white mt-4">
                  Place an order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheekoutPages;
