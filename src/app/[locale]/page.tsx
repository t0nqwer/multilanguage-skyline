import { useTranslations } from "next-intl";
import Hero from "./_components/homepage/Hero";
import AboutBusiness from "./_components/homepage/AboutBusiness";
import WhyUs from "./_components/homepage/WhyUs";
import OurProduct from "./_components/homepage/OurProduct";
import Interest from "./_components/homepage/Interest";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <Hero />
      <WhyUs />
      <OurProduct />
      <Interest />
      <AboutBusiness />
      <h1>{t("title")}</h1>;
    </>
  );
}
