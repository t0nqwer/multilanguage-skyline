"use client";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../../../../lib/constanst";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
interface NavBarProps {
  locale: string;
}

const FixNavbar = ({ locale }: NavBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
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
            {item.name}
          </Link>
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
  );
};

export default FixNavbar;
