import React from "react";

const OurProduct = () => {
  return (
    <div className="relative flex items-center w-full py-24 mainpadding">
      <div className="w-full ">
        <h1 className="heddertext">
          Our<span className=" text-second"> Products</span>
        </h1>
        <p>
          Focus on lighting industry for 10 years, master the core technology of
          solar energy
        </p>
        <div className="flex w-full gap-10 mt-10 max-sm:flex-wrap">
          <div className="relative w-full h-full overflow-hidden rounded-xl ">
            <img
              src="/solarenergystreetlamp.png"
              alt="product1"
              className="w-full h-[500px] object-cover object-top  "
            />
            <div className="absolute inset-x-0 bottom-0 opacity-60 h-1/5 bg-gradient-to-t from-main to-transparent"></div>

            <h1 className="absolute bottom-0 w-full mb-8 text-3xl font-medium text-center text-white ">
              Solar Energy Street Lamp
            </h1>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-xl ">
            <img
              src="/Projection.png"
              alt="product1"
              className="w-full h-[500px] object-cover object-top  "
            />
            <div className="absolute inset-x-0 bottom-0 opacity-60 h-1/5 bg-gradient-to-t from-main to-transparent"></div>
            <h1 className="absolute bottom-0 w-full mb-8 text-3xl font-medium text-center text-white ">
              Solar Energy Projection Lamp
            </h1>
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-xl ">
            <img
              src="/ufo.png"
              alt="product1"
              className="w-full h-[500px] object-cover object-top  "
            />
            <div className="absolute inset-x-0 bottom-0 opacity-60 h-1/5 bg-gradient-to-t from-main to-transparent"></div>

            <h1 className="absolute bottom-0 w-full mb-8 text-3xl font-medium text-center text-white ">
              Solar Energy UFO Lamp
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
