import React from "react";
import ProductCard from "../../../_components/ProductCard";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Product");
  return (
    <div className="pb-16 ">
      <div>
        <img
          src="/product/cover.jpg"
          alt=""
          className="object-contain h-full mx-auto"
        />
      </div>
      <div className=" mainpadding">
        <h1 className="mt-10 text-4xl text-center "> {t("title")}</h1>
        <div className="mt-5">
          <h1 className="heddertext"> Solar Energy Street Lamp</h1>
          <div className="flex flex-wrap justify-between gap-10 mt-5 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="mt-16">
          <h1 className="heddertext"> Solar Energy Projection Lamp</h1>
          <div className="flex flex-wrap justify-between gap-10 mt-5 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="mt-16">
          <h1 className="heddertext"> Solar Energy UFO Lamp</h1>
          <div className="flex flex-wrap justify-between gap-10 mt-5 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
