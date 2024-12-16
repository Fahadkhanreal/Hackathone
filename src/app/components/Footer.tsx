import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="h-[632]">
        <div className="flex justify-center mt-40 gap-72">
          <h1 className="text-[32px] font-bold">
            Still You Need Our Support ?{" "}
            <p className="font-normal text-[16px]">
              Dont wait make a smart & logical quote here. Its pretty easy.
            </p>
          </h1>
          <Image src={"/mail.png"} alt="logo" width={459} height={56} />
        </div>
        <div className="flex justify-center mt-20">
          <div className="border-t-[1px] border-[#ff9f0d] w-[1170] "></div>
        </div>

        <div className="flex justify-center gap-40 mt-20">
          <div className="space-y-6">
           <Link href={"/about"}> <h1 className="font-bold text-[24px]">About Us.</h1></Link>
            <p className="w-[312px]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex">
              <Image src={"/l1.png"} alt="logo" height={72} width={78} />
              <div className="ml-4">
                <h1>opening Houres</h1>
                <h2>Mon - sat (8.00 - 600)</h2>
                <h3>Sunday Closed</h3>
              </div>
            </div>
          </div>

          <div>
            <h1 className="mb-6 font-bold text-[24px]">Useful Links </h1>
            <ul className="space-y-6 text-[20px]">
             <Link href={"/about"}> <li>About</li></Link>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div>
            <h1 className="mb-6 font-bold text-[24px] ">Help?</h1>
            <ul className="space-y-6 text-[20px]">
             <Link href={"/faq"}> <li>FAQ</li></Link>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h1 className="mb-6 font-bold text-[24px]">Recent Post </h1>
            <div className="flex">
              <Image src={"/l2.png"} alt="logo" width={59} height={48} />
              <div className="ml-2">
                <h4>20 Feb 2022</h4>
                <h1 className="text-[28px]">Keep Your Business</h1>
              </div>
            </div>

            <div className="flex">
              <Image src={"/l3.png"} alt="logo" width={59} height={48} />
              <div className="ml-2">
                <h4>20 Feb 2022</h4>
                <h1 className="text-[28px]">Keep Your Business</h1>
              </div>
            </div>

            <div className="flex">
              <Image src={"/l4.png"} alt="logo" width={59} height={48} />
              <div className="ml-2">
                <h4>20 Feb 2022</h4>
                <h1 className="text-[28px]">Keep Your Business</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[99px] bg-[#ff9f0d] flex justify-between items-center">
        <h1 className="ml-8">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </h1>
        <Image
          className="mr-8"
          src={"/so1.png"}
          alt="logo"
          height={24}
          width={384}
        />
      </div>
    </div>
  );
};

export default Footer;
