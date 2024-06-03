"use client";
import { navItems } from "../../../../lib/constanst";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useNavMenu from "../../../../lib/zustand/navmenu";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface NavBarProps {
  locale: string;
}
const Sidebar = ({ locale }: NavBarProps) => {
  const { floatNav, setSideBarActive, isSideBarActive } = useNavMenu();
  const router = useRouter();

  const t = useTranslations("NavBar");

  if (!isSideBarActive) return null;
  return (
    <div className="relative flex flex-col items-center py-10 space-y-14 fullWidth bg-main">
      <div
        className="absolute z-40 text-white right-10 top-10"
        onClick={() => setSideBarActive(false)}
      >
        <IoMdCloseCircleOutline className="text-2xl" />
      </div>
      <div id="logo" className="h-10 ">
        <img src="/logo.png" alt="" className="object-contain h-full " />
      </div>
      <nav className="flex flex-col gap-5 text-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              router.push(`/${locale}/skyline/${item.href}`, { scroll: true });
              setSideBarActive(false);
            }}
            className={` px-5 py-3 text-xl rounded-full transition-all 
                text-white hover:bg-main bg-opacity-0 hover:bg-opacity-50  
            `}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
