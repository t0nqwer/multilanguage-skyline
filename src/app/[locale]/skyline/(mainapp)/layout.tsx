import FixNavbar from "../../_components/FixNavbar";
import Footer from "../../_components/Footer";
import NavBarHome from "../../_components/NavbarHome";

export default function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <div id="maindiv" className="">
      <FixNavbar locale={locale} />
      {children}
    </div>
  );
}
