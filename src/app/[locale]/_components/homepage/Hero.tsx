"use client";

import { useEffect, useState } from "react";
import useScreenSize from "@/lib/hook/useScreenSize";

const slides = [
  "/hero/4.jpg",
  "/hero/5.jpg",
  "/hero/1.jpg",
  "/hero/2.jpg",
  "/hero/3.jpg",
];

const Hero = () => {
  const screenSize = useScreenSize();
  let [current, setCurrent] = useState(0);
  const [height, setHeight] = useState(0);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);
  useEffect(() => {
    const fullWidthElement = document.querySelector(".fullWidth");
    if (fullWidthElement) {
      const width = fullWidthElement.clientWidth / 16;
      setHeight(width * 9);
    }
  }, [screenSize.width, screenSize.height]);
  return (
    <div
      className={`relative overflow-hidden maxWidth h-screen`}
      // style={{ height: `${height}px` }}
    >
      <div
        className={`flex transition h-full ease-out duration-500  `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full shrink-0 bg-main">
            <img
              src={slide}
              alt=""
              className="2xl:object-cover w-full h-full  object-center shrink-0"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 flex items-center justify-between w-full h-full px-10 text-3xl text-white">
        <button onClick={previousSlide}>{`<`}</button>
        <button onClick={nextSlide}>{`>`}</button>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full gap-3 py-4">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 max-md:w-2 max-md:h-2 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
