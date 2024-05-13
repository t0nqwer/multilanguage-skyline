import { useTranslations } from "next-intl";

const Interest = () => {
  const t = useTranslations("HomepageInterest");
  return (
    <section className="flex items-center w-full py-20 bg-second bg-opacity-80 mainpadding">
      <div className="flex justify-between w-full gap-1 max-sm:flex-wrap ">
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl font-semibold max-2xl:text-4xl max-sm:text-5xl ">
            {t(`title`)}
          </h1>
          <div className="flex justify-between mt-10 font-medium xl:space-x-10 lg:space-x-2 2xl:text-2xl xl:text-xl 3xl:text-3xl 3xl:space-x-20 max-sm:space-y-5 max-sm:space-x-0 max-sm:flex-wrap ">
            <a
              href="tel:062-252-3924"
              className="px-8 py-3 align-middle transition-all rounded-full outline outline-1 outline-dark hover:bg-dark hover:text-white active:scale-110"
            >
              <span>TEL : </span>
              089-899-2495
            </a>
            <a
              href="https://line.me/ti/p/~mrton12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 align-middle transition-all rounded-full outline outline-1 outline-dark hover:bg-dark hover:text-white active:scale-110"
            >
              <span>LINE ID : </span>
              mrton12
            </a>
          </div>
        </div>
        <div className="flex items-center shrink-0 max-sm:mt-10 ">
          <img
            src="/lineqr.jpg"
            alt="skylinebusinessplus qrcode"
            className=" 2xl:w-[263px] 2xl:h-[263px] xl:w-[200px] xl:h-[200px]  lg:w-[150px] lg:h-[150px] object-cover"
          />
        </div>
        <div className="h-[300px] w-1 bg-dark max-sm:hidden" />
        <hr className="" />
        <div className="flex flex-col items-center justify-center shrink-0 max-sm:mt-10 max-sm:items-start ">
          <h1 className="font-semibold 2xl:text-4xl xl:text-3xl md:text-xl lg:text-2xl">
            {t(`quotation`)}
          </h1>
          <button className="mt-10 ">
            <a
              href="/requestaquote"
              className="px-8 py-3 text-lg text-white transition-all rounded-full 2xl:text-2xl bg-dark hover:outline hover:outline-2 outline-dark hover:bg-transparent hover:text-dark active:scale-110"
            >
              {t(`request`)}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interest;
