import React from "react";

const Interest = () => {
  return (
    <section className="flex items-center w-full py-20 bg-second bg-opacity-80 mainpadding">
      <div className="flex justify-between w-full max-sm:flex-wrap ">
        <div className="flex flex-col justify-center ">
          <h1 className="font-semibold text-7xl max-sm:text-5xl ">
            สนใจสินค้าติดต่อ
          </h1>
          <div className="flex justify-between mt-10 space-x-20 text-3xl font-medium max-sm:space-y-5 max-sm:space-x-0 max-sm:flex-wrap ">
            <a
              href="tel:062-252-3924"
              className="px-8 py-3 align-middle transition-all rounded-full outline outline-1 outline-dark hover:bg-dark hover:text-white active:scale-110"
            >
              <span>TEL : </span>
              089-899-2495
            </a>
            <a
              href="https://line.me/ti/p/~mrton12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 align-middle transition-all rounded-full outline outline-1 outline-dark hover:bg-dark hover:text-white active:scale-110"
            >
              <span>LINE ID : </span>
              mrton12
            </a>
          </div>
        </div>
        <div className="flex items-center shrink-0 max-sm:mt-10 ">
          <img
            src="/lineqr.jpg"
            alt="skylinebusinessplus qrcode"
            className=" w-[263px] h-[263px] object-cover"
          />
        </div>
        <div className="h-[300px] w-1 bg-dark max-sm:hidden" />
        <hr className="" />
        <div className="flex flex-col items-center justify-center max-sm:mt-10 max-sm:items-start ">
          <h1 className="text-4xl font-semibold md:text-3xl xl:text-5xl lg:text-4xl">
            ใบเสนอราคาสินค้า
          </h1>
          <button className="mt-10 ">
            <a
              href="/requestaquote"
              className="px-8 py-3 text-2xl text-white transition-all rounded-full bg-dark hover:outline hover:outline-2 outline-dark hover:bg-transparent hover:text-dark active:scale-110"
            >
              ขอใบเสนอราคา
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interest;
