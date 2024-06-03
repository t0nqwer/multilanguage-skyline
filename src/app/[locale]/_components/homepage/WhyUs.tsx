import { useTranslations } from "next-intl";
const WhyUs = () => {
  const t = useTranslations("WhyUs");
  const imageClass =
    "mx-auto xl:w-52 xl:h-52 lg:h-40 lg:w-40 md:w-32 md:h-32 sm:w-20 sm:h-20  w-16 h-16 invert";
  return (
    <div className="relative flex items-center w-full py-16 xl:py-32 lg:py-20 mainpadding bg-main">
      <div className="w-full">
        <h1 className="text-3xl max-sm:text-2xl font-light text-center text-white opacity-80">
          WHY US?
        </h1>
        <h1 className="mt-5 text-center text-white heddertext">
          {t(`headder`)}
        </h1>
        <div className="flex justify-center w-full gap-5 mx-auto mt-12 xl:mt-16 max-md:flex-wrap ">
          <div className="w-[380px]  ">
            <img src="/icon/rating-stars.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">
              {t(`title1`)}
            </h1>
            <p className="mt-3 text-center text-white">{t(`detail1`)}</p>
          </div>
          <div className="w-[380px]  ">
            <img src="/icon/international.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">
              {t(`title2`)}
            </h1>
            <p className="mt-3 text-center text-white">{t(`detail2`)}</p>
          </div>

          <div className="w-[380px]  ">
            <img src="/icon/insurance.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">
              {t(`title3`)}
            </h1>
            <p className="mt-3 text-center text-white">{t(`detail3`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
