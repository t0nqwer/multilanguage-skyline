"use client";
import { FaLocationDot, FaLine } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import ContactForm from "@/app/[locale]/_components/ContactForm";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <div className="pb-20 mainpadding">
      <div className="mt-20 text-center ">
        <h3 className="text-xl max-sm:text-lg ">CONTACT US</h3>
        <h1 className="mt-5 text-5xl font-semibold  max-sm:text-4xl max-sm:mt-2">
          ติดต่อเรา
        </h1>
        <p className="mt-5 text-3xl max-sm:text-2xl">{t(`campanyName`)}</p>
        <p className="mt-3 text-2xl max-sm:text-xl max-sm:mt-2">
          {t(`companyAddress`)}
        </p>
        <div className="flex flex-row items-center justify-center py-8 space-x-5 text-dark max-sm:flex-col  max-sm:space-x-0 max-sm:space-y-2">
          <button
            className="flex items-center justify-center space-x-3 text-center "
            onClick={() => {
              window.open("tel:089-899-2495");
            }}
          >
            <BsTelephoneFill />
            <span>{t(`tel`)} : 089-899-2495</span>
          </button>
          <button
            className="flex items-center justify-center space-x-3 text-center "
            onClick={() => {
              window.open("https://line.me/ti/p/mrton12");
            }}
          >
            <FaLine />
            <span>Line Id : mrton12</span>
          </button>
          {/* <div className="flex items-center text-left ">
            <FaLocationDot className="mr-3 text-xl" />
            <p className="">
              {t(`campanyName`)}
              <br />
              {t(`companyAddress`)}
            </p>
          </div> */}
        </div>
        <div className="flex w-full mt-10 space-y-10 max-sm:flex-col ">
          <ContactForm />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.700121578277!2d100.5164379!3d13.7229886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29982a20e8ced%3A0xf8f75e240c78ac3f!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4quC4geC4suC4ouC5hOC4peC4meC5jCDguJrguLTguKrguKrguLTguYDguJnguKrguJ7guKXguLHguKog4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v1714797618791!5m2!1sth!2sth"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 max-sm:h-96 max-sm:w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
