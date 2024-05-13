"use client";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../../../../lib/constanst";
import { BsTelephoneFill } from "react-icons/bs";
import ThaiFlag from "@/assets/thailand_4855805.png";
import EngFlag from "@/assets/united-states_197484.png";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";
interface NavBarProps {
  locale: string;
}

const FixNavbar = ({ locale }: NavBarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("NavBar");
  const Changelang = () => {
    const path = pathname.split("/");
    const newPath = path.filter((item, i) => item !== "" && i !== 1).join("/");
    console.log(newPath);
    router.push(`/${locale === "th" ? "en" : "th"}/${newPath}`);
  };
  return (
    <div className="flex justify-between w-full py-5 bg-main mainpadding max-sm:hidden">
      <div id="logo" className="h-12 ">
        <img src="/logo.png" alt="" className="object-contain h-full " />
      </div>
      <nav className="flex gap-5">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={`/${locale}/skyline/${item.href}`}
            className={` px-5 py-3 rounded-full transition-all cursor-pointer  ${
              pathname === item.href
                ? "bg-main text-white"
                : "text-white hover:bg-main bg-opacity-0 hover:bg-opacity-50  "
            }`}
          >
            {t(`${item.name}`)}
          </Link>
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
  );
};

export default FixNavbar;
