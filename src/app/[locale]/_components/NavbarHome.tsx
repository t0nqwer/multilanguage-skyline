"use client";
import { BsTelephoneFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { navItems } from "../../../../lib/constanst";
import { useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import useNavMenu from "../../../../lib/zustand/navmenu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ThaiFlag from "@/assets/thailand_4855805.png";
import EngFlag from "@/assets/united-states_197484.png";
import Image from "next/image";
import path from "path";

interface NavBarProps {
  locale: string;
}

const NavBarHome = ({ locale }: NavBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { floatNav, setSideBarActive } = useNavMenu();

  const t = useTranslations("NavBar");
  useEffect(() => {
    const floatchild = document.getElementById("floatchild");
    const float = document.getElementById("float");
    const floatchild2 = document.getElementById("floatchild2");

    if (floatNav) {
      float?.classList.remove("-z-10");
      float?.classList.add("z-50");
      floatchild?.classList.remove("opacity-0");
      floatchild?.classList.add("opacity-100");
      floatchild2?.classList.remove("opacity-0");
      floatchild2?.classList.add("opacity-100");
    }
    if (!floatNav) {
      floatchild?.classList.remove("opacity-100");
      floatchild?.classList.add("opacity-0");
      floatchild2?.classList.remove("opacity-100");
      floatchild2?.classList.add("opacity-0");
    }
  }, [floatNav]);

  const Changelang = () => {
    const path = pathname.split("/");
    const newPath = path.filter((item, i) => item !== "" && i !== 1).join("/");
    router.push(`/${locale === "th" ? "en" : "th"}/${newPath}`, {
      scroll: false,
    });
  };

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
          <div className="flex gap-3 ">
            <button className="">
              <a
                href="tel:089-899-2495"
                className="flex items-center justify-center p-2 space-x-2 text-white rounded-full bg-second"
              >
                <BsTelephoneFill className="text-xl" />
              </a>
            </button>
            <button
              className="flex items-center justify-center p-2 space-x-2 text-white rounded-full bg-second"
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
      </div>
      <div id="float" className="fixed z-50 w-full mt-3 px-3 md:hidden ">
        <div
          id="floatchild2"
          className="flex items-center justify-between w-full p-3 transition-all duration-300 bg-opacity-50 rounded-full bg-dark backdrop-blur-md "
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
      </div>
    </>
  );
};

export default NavBarHome;
