"use client"
import Image from "next/image";
import Doc from "@/public/images/aboutUs/doc.png";

export default function AboutUs() {

  const handleScrollToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleButtonClick = (buttonType) => {
    fetch(`https://endocrinolog.uz/api/counter/add?button=${buttonType}`, {
      method: "POST",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      console.log(`Button ${buttonType} clicked`);
    })
    .catch(e => {
      console.error(`Error logging button click for ${buttonType}`, e);
    });
  };

  const handleClick = () => {
    handleScrollToForm();
    handleButtonClick('MAKE_AN_APPOINTMENT');
  };

  return (
    <div className="w-full h-auto flex flex-col xl:justify-between mx-auto bg-[#F1F4F8]">
      <div className="xl:flex xl:flex-row xl:justify-between max-w-[1440px] w-full mx-auto">
        <div className="xl:flex xl:flex-col xl:justify-center xl:items-start text-center xl:text-left">
          <h1 className=" px-4 text-[30px] mdx:text-[45px] xl:text-[50px] mx-auto xl:mx-0 mt-[40px] font-bold max-w-[639px] lh xl:px-0">
            Ваш надежный эндокринолог <span className=" text-[#3FAEFF]">Джураева Азиза Шахзадэевна</span>
          </h1>
          <p className="text-sm text-[#737373] mx-auto xl:mx-0 w-[217px] mdx:w-full mdx:text-[20px] mt-[10px] font-semibold">
            Кандидат медицинских наук, стаж работы 28 лет
          </p>
          <div className="flex justify-center xl:justify-start">
            <button className="rounded-xl bg-[#3FAEFF] text-[#fff] px-[36px] py-[16px] text-[14px] mdx:text-[16px] text-base mdx:px-[25px] mt-[40px] font-bold"
            onClick={handleClick}>
              Записаться на прием
            </button>
          </div>
        </div>
        <div className="xl:flex xl:items-center">
          <Image
            src={Doc}
            height={1500}
            width={1500}
            alt={`Doctor`}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
