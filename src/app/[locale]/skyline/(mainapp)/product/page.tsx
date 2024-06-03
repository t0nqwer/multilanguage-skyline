import ProductCard from "../../../_components/ProductCard";
import { useTranslations } from "next-intl";
import { Productdata } from "@/lib/Productdata";
import Modal from "@/app/[locale]/_components/Modal";

const page = () => {
  const t = useTranslations("Product");
  return (
    <div className="pb-16 ">
      {/* <Modal /> */}
      <div>
        <img
          src="/product/cover.jpg"
          alt=""
          className="object-contain h-full mx-auto"
        />
      </div>
      <div className=" mainpadding">
        <h1 className="mt-10 text-4xl text-center "> {t("title")}</h1>
        {Productdata.map((data, index) => (
          <div className="mt-16 ">
            <div className=" grid grid-cols-3 gap-10 gap-x-20 max-xl:gap-x-5 max-lg:grid-cols-2 mt-5 w-fit mx-auto ">
              <h1 className="heddertext col-span-3 max-lg:col-span-2 max-[500px]:gap-x-2  max-[380px]:grid-cols-1">
                {data.category}
              </h1>
              {data.Product.map((product, index) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  FrontImg={product.FrontImg}
                  DetailImage={product.DetailImage}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
