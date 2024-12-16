import React from "react";
import Image from "next/image";
const Menu = () => {
  return (
    <div>
      <div className=" h-[756px]   flex justify-center ">
        <div className="flex flex-col items-center  ">
          <h1 className="text-[#ff9f0d] text-[32px]">Chase & Pick</h1>
          <h1 className="mb-6 text-[#ff9f0d] text-[48px] font-bold">
            From our Menu
          </h1>

          <ul className="flex gap-20 text-[20px]">
            <li>Breakfast</li>
            <li>Breakfast</li>
            <li>Breakfast</li>
            <li>Breakfast</li>
            <li>Breakfast</li>
            <li>Breakfast</li>
            <li>Breakfast</li>
          </ul>

          <div className="flex space-x-32 mt-16 ">
            <div>
              <Image src={"/b1.png"} alt="logo" width={515} height={406} />
            </div>

            <div className="grid grid-rows-4 grid-cols-2 mt-8">
              <div>
                <div className="flex gap-4">
                  <Image src={"/h1.png"} alt="logo" height={79} width={80} />
                  <div>
                    <h1>Lettuce Leaf</h1>
                    <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                    <div>12.5$</div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h5.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Glow Cheese</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>12.5$</div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h2.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Fresh Breakfast</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>14.5$</div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h6.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Italian Pizza</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>14.5$</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h3.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Mild Butter</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>12.5$</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h7.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Slice Beef</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>12.5$</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h4.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Fresh Bread</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>12.5$</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <div className="flex gap-4">
                    <Image src={"/h8.png"} alt="logo" height={79} width={80} />
                    <div>
                      <h1>Mashaom Pizza</h1>
                      <span>Lacus nisi, et ac dapibus velit in consequat.</span>
                      <div>12.5$</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
