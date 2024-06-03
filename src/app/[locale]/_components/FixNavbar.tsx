"use client";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../../../../lib/constanst";
import { BsTelephoneFill } from "react-icons/bs";
import ThaiFlag from "@/assets/thailand_4855805.png";
import EngFlag from "@/assets/united-states_197484.png";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { IoMenu } from "react-icons/io5";
import useNavMenu from "../../../../lib/zustand/navmenu";
interface NavBarProps {
  locale: string;
}

const FixNavbar = ({ locale }: NavBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { floatNav, setSideBarActive } = useNavMenu();

  const t = useTranslations("NavBar");
  const Changelang = () => {
    const path = pathname.split("/");
    const newPath = path.filter((item, i) => item !== "" && i !== 1).join("/");
    router.push(`/${locale === "th" ? "en" : "th"}/${newPath}`);
  };
  return (
    <>
      <div className="flex justify-between w-full py-5 bg-main mainpadding max-sm:hidden">
        <div id="logo" className="h-12 ">
          <img src="/logo.png" alt="" className="object-contain h-full " />
        </div>
        <nav className="flex gap-5">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(`/${locale}/skyline/${item.href}`, {
                  scroll: false,
                });
              }}
              className={` px-5 py-3 rounded-full transition-all cursor-pointer  ${
                pathname === item.href
                  ? "bg-main text-white"
                  : "text-white hover:bg-main bg-opacity-0 hover:bg-opacity-50  "
              }`}
            >
              {t(`${item.name}`)}
            </button>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-3 ">
          <button className="">
            <a
              href="tel:089-899-2495"
              className="flex items-center justify-center p-2 space-x-2 text-white rounded-full bg-second"
            >
              <BsTelephoneFill className="text-xl" />
            </a>
          </button>
          <button
            className="flex items-center justify-center p-2 space-x-2 text-white rounded-full h-fit bg-second"
            onClick={Changelang}
          >
            <Image
              src={locale === "th" ? ThaiFlag : EngFlag}
              alt="multilanguage"
              width={50}
              height={50}
              className="w-5 h-5 "
            />
          </button>
        </div>
      </div>
      <div
        id="floatchild2"
        className="flex justify-between w-full py-5 bg-main mainpadding  sm:hidden "
      >
        <div id="logo" className="h-6 ">
          <img src="/logo.png" alt="" className="object-contain h-full " />
        </div>

        <div className="flex">
          <button
            className="flex items-center justify-center  w-7 h-7 text-white rounded-full bg-second"
            onClick={Changelang}
          >
            <Image
              src={locale === "th" ? ThaiFlag : EngFlag}
              alt="multilanguage"
              width={50}
              height={50}
              className="w-5 h-5 "
            />
          </button>
          <button
            className="p-1 text-xl rounded-full bg-second ml-4"
            onClick={() => setSideBarActive(true)}
          >
            <IoMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default FixNavbar;
