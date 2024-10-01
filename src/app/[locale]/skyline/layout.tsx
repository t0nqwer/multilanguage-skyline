"use client";

import Footer from "@/app/[locale]/_components/Footer";
import useNavMenu from "../../../../lib/zustand/navmenu";

export default function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { setFloatNav } = useNavMenu();

  const scroll = () => {
    const maindiv = document.getElementById("maindiv");
    if (maindiv && maindiv.scrollTop > 10) {
      setFloatNav(true);
    } else {
      setFloatNav(true);
    }
  };

  return (
    <div id="maindiv" className="overflow-x-hidden fullWidth" onScroll={scroll}>
      {children}
      <Footer locale={locale} />
    </div>
  );
}
