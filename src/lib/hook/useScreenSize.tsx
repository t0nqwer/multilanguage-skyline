"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const main = document.getElementById("maindiv");
    if (main) {
      setScreenSize({
        width: main?.clientWidth,
        height: main?.clientHeight,
      });
    }

    const handleResize = () => {
      if (main)
        setScreenSize({
          width: main?.clientWidth,
          height: main.clientWidth,
        });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
