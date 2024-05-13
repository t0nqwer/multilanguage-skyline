import { useTranslations } from "next-intl";

const about = () => {
  const t = useTranslations("About");
  return (
    <div className="pb-20 mainpadding">
      <div className="mt-20 text-center ">
        <h3 className="text-xl ">ABOUT US</h3>
        <h1 className="mt-5 text-4xl ">เกี่ยวกับเรา</h1>
        <p className="mt-10 text-xl">{t("story2")}</p>
        <img src="/Catalog.bmp" alt="" className="mx-auto mt-10" />
      </div>
    </div>
  );
};

export default about;
