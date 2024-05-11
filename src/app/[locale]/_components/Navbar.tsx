"use client";
import { BsTelephoneFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { navItems } from "../../../lib/constanst";
import { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import useNavMenu from "@/lib/zustand/navmenu";

const NavBar = () => {
  const pathname = usePathname();
  const { floatNav, setSideBarActive } = useNavMenu();

  useEffect(() => {
    const floatchild = document.getElementById("floatchild");
    const float = document.getElementById("float");
    if (floatNav) {
      float?.classList.remove("-z-10");
      float?.classList.add("z-50");
      floatchild?.classList.remove("opacity-0");
      floatchild?.classList.add("opacity-100");
    }
    if (!floatNav) {
      floatchild?.classList.remove("opacity-100");
      floatchild?.classList.add("opacity-0");
    }
  }, [floatNav]);

  return (
    <>
      <div
        id="float"
        className="fixed w-full mt-5 -z-10 mainpadding max-md:hidden "
      >
        <div
          id="floatchild"
          className="flex items-center justify-between w-full p-3 transition-all duration-300 bg-opacity-50 border rounded-full opacity-0 bg-dark backdrop-blur-md "
        >
          <div id="logo" className="h-12 ">
            <img src="/logo.png" alt="" className="object-contain h-full " />
          </div>
          <nav className="flex gap-5">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={` px-5 py-3 rounded-full transition-all  ${
                  pathname === item.href
                    ? "bg-main text-white"
                    : "text-white hover:bg-main bg-opacity-0 hover:bg-opacity-50  "
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <button className="">
            <a
              href="tel:089-899-2495"
              className="flex items-center justify-center px-8 py-3 space-x-2 text-white rounded-full bg-second"
            >
              <BsTelephoneFill className="" />
              <span>089-899-2495</span>
            </a>
          </button>
        </div>
      </div>
      <div id="float" className="fixed z-50 w-full mt-3 mainpadding md:hidden ">
        <div
          id="floatchild"
          className="flex items-center justify-between w-full p-3 transition-all duration-300 bg-opacity-50 rounded-full bg-dark backdrop-blur-md "
        >
          <div id="logo" className="h-10 ">
            <img src="/logo.png" alt="" className="object-contain h-full " />
          </div>

          <button
            className="p-3 text-xl rounded-full bg-second"
            onClick={() => setSideBarActive(true)}
          >
            <IoMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
