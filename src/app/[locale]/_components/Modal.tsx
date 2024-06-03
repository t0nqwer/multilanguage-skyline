"use client";
import { useState, useEffect } from "react";
import { Productdata } from "@/lib/Productdata";
import Image from "next/image";
import useModalState from "@/lib/zustand/modalState";
import { ProductTypes } from "@/lib/Productdata";
import { CgCloseO } from "react-icons/cg";

const Modal = () => {
  const [product, setProduct] = useState<ProductTypes>();
  const { ModalId, isModalActive, setModalActive, setModalId } =
    useModalState();

  useEffect(() => {
    const [getProduct] = Productdata.flatMap((item) =>
      item.Product.filter((product) => product.id === ModalId)
    );
    setProduct(getProduct);
  }, [ModalId]);

  return (
    isModalActive && (
      <div
        className=" absolute fullWidth p-5 bg-black bg-opacity-30 backdrop-blur-md "
        style={{ zIndex: 9999 }}
      >
        <div className=" w-full h-full relative flex items-center justify-center">
          {product?.id !== "bj1" ? (
            <div className=" relative w-fit h-fit">
              <div
                className=" absolute top-2 right-2 text-main select-none text-xl"
                onClick={() => {
                  setModalActive(false);
                  setModalId("");
                }}
              >
                <CgCloseO />
              </div>
              <>
                {product && (
                  <Image
                    src={product.DetailImage}
                    width={600}
                    height={800}
                    alt={product.name}
                  />
                )}
              </>
            </div>
          ) : (
            <div className=" relative w-fit h-full">
              <div
                className=" absolute top-2 right-2 text-main select-none text-xl"
                onClick={() => {
                  setModalActive(false);
                  setModalId("");
                }}
              >
                <CgCloseO />
              </div>
              <div className=" w-full max-w-[500px] h-full overflow-y-auto bg-white p-8">
                <div className="">
                  <p>
                    <span className=" font-medium text-lg">
                      บางจาก จัสมิน 2
                    </span>
                    เป็นจาระบีคุณภาพสูงชนิดอลูมิเนียมคอมเพล็กซ์พัฒนาขึ้นสำหรับหล่อลื่นเครื่องจักรต่างๆ
                    ในอุตสาหกรรมอาหาร
                    ได้รับการรับรองคุณภาพตามสถาบันอาหารและยาแห่งประเทศสหรัฐอเมริกา
                    USDA H-1 และ FDAregulation 178.3570
                    ประกอบด้วยสารเพิ่มคุณภาพรับแรงกดสูงและสารป้องกันการสึกหรอซึ่งปกป้องการกัดกร่อน
                    ป้องกันปฎิกิริยากับออกซิเจน
                    นอกจากนี้ยังมีคุณสมบัติเพิ่มเติมดังนี้
                    <br />
                    &nbsp;
                  </p>
                  <ul className=" list-disc px-5">
                    <li>ยึดเกาะผิวได้ดี</li>
                    <li>รับแรงกดและแรงกระแทกสูงได้เป็นเยี่ยม</li>
                    <li>ป้องกันสนิมและการกัดกร่อนได้ดีเยี่ยม</li>
                    <li>ลดการสึกหรอในสภาพการทำงานหนักหรือแรงกระแทกสูง</li>
                    <li>ต้านทานการชะล้างจากน้ำได้ดี</li>
                  </ul>
                  <br />
                  &nbsp;
                  <p>
                    <strong>
                      <strong>การใช้งานของ บางจาก จัสมิน 2</strong>
                    </strong>
                    <br />
                    <br />
                    ใช้หล่อลื่นแบริ่งกาบ ลูกปืน
                    ตลับลูกปืนในสารพานลำเลียงข้อต่อของเครื่องจักรกลในโรงงานอุตสาหกรรมอาหารและยา
                    อุณหภูมิใช้งาน -25°C ถึง 150°C
                    สามารถใช้งานในช่วงอุณหภูมิสูงแต่ใช้ได้ในระยะสั้น
                    และต้องหมั่นอัดจาระบีบ่อย
                    <br />
                    <br />
                    <strong>
                      คุณสมบัติทั่วไปของ บางจาก จัสมิน 2
                      <br />
                      &nbsp;
                    </strong>
                  </p>
                  <div className=" w-full flex justify-between font-medium">
                    <span>คุณสมบัติทั่วไป</span>
                    <span> จัสมิน 2</span>
                  </div>
                  <div className="mt-2 w-full flex justify-between ">
                    <span>ความข้นใสที่ 40°C, cSt</span>
                    <span> 100</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>ชนิดของสารอุ้มน้ำมัน</span>
                    <span> อลูมิเนียมคอมเพล็กซ์</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>สี, ASTM</span>
                    <span> ขาว</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>จุดหยด, °C</span>
                    <span>265</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>
                      ระยะจมของจาระบี (ที่ผ่านการอัดผ่านตะแกรง) ที่ 25°C
                    </span>
                    <span> 280</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>% การสูญเสียเมื่อถูกน้ำชะที่อุณหภูมิ 38°C</span>
                    <span> 5</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>การรับแรงกด 4 ball EP, กิโลกรัม</span>
                    <span> 200</span>
                  </div>
                  <div className=" w-full flex justify-between ">
                    <span>
                      การรั่วไหลของจาระบีในลูกปืนล้อที่ 20 ชั่วโมง, กรัม
                    </span>
                    <span>0.4</span>
                  </div>
                  <p>
                    <br />
                    บรรจุภัณฑ์ : 15 กิโลกรัม
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
