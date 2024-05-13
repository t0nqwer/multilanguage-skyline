"use client";
import { useTranslations } from "next-intl";
import Hero from "@/app/[locale]/_components/homepage/Hero";
import AboutBusiness from "@/app/[locale]/_components/homepage/AboutBusiness";
import WhyUs from "@/app/[locale]/_components/homepage/WhyUs";
import OurProduct from "@/app/[locale]/_components/homepage/OurProduct";
import Interest from "@/app/[locale]/_components/homepage/Interest";

export default function Index({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  return (
    <>
      <Hero />
      <WhyUs />
      <OurProduct />
      <Interest />
      <AboutBusiness locale={locale} />
    </>
  );
}
