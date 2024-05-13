"use client";
import { useRouter } from "next/navigation";

const ProductCard = () => {
  const router = useRouter();
  return (
    <div
      className="w-[350px] overflow-hidden border rounded-xl border-dark hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={() => {
        router.push("/product/ads");
      }}
    >
      <img
        src="/solarenergystreetlamp.png"
        alt=""
        className="object-cover w-full h-[500px]"
      />
      <p className="py-3 text-2xl text-center ">Solar Energy Street Lamp</p>
    </div>
  );
};

export default ProductCard;
