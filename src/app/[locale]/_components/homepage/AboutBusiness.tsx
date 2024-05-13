import Link from "next/link";
import { useTranslations } from "next-intl";

interface NavBarProps {
  locale: string;
}

const AboutBusiness = ({ locale }: NavBarProps) => {
  const t = useTranslations("HomepageAbout");
  return (
    <div
      className="w-full  h-[850px] relative
     "
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <img
          src="/aboutbusiness.png"
          className="object-cover w-full h-full"
          alt=" about skyline business"
        />
      </div>
      <div className="relative w-full h-full bg-dark mainpadding bg-opacity-80">
        <div className=" absolute top-[50%] -translate-y-[50%]">
          <h1 className="text-white heddertext">Skyline Business Plus</h1>
          <p className="text-3xl max-sm:text-xl max-sm:max-w-[350px] text-white max-w-[800px] mt-10 leading-relaxed ">
            {t(`story`)}
          </p>
          <button className="mt-10 ">
            <Link
              href={`/${locale}/skyline/about`}
              className="px-8 py-3 mt-10 text-white transition-all bg-opacity-50 rounded-full bg-second backdrop-blur-md hover:bg-opacity-90 active:scale-110"
            >
              {t(`readmore`)}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
