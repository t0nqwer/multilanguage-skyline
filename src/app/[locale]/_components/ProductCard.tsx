"use client";
import { useRouter } from "next/navigation";
import { ProductTypes } from "@/lib/Productdata";
import Image from "next/image";
import useModalState from "@/lib/zustand/modalState";

const ProductCard = ({ name, FrontImg, DetailImage, id }: ProductTypes) => {
  const { setModalActive, setModalId } = useModalState();
  return (
    <div
      className="w-[350px] max-xl:w-[280px] max-[500px]:w-[180px]  overflow-hidden border rounded-xl border-dark hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={() => {
        setModalActive(true);
        setModalId(id);
      }}
    >
      <Image
        width={350}
        height={500}
        src={FrontImg}
        alt={name}
        className="object-cover w-full h-[500px] max-xl:h-[400px] max-[500px]:h-[240px] "
      />
      <p className="py-3 text-2xl text-center max-xl:text-xl max-sm:text-sm ">
        {name}
      </p>
    </div>
  );
};

export default ProductCard;
