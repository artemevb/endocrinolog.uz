import Image from "next/image";
import material from "@/public/svg/whyus/material.svg";
import microscope from "@/public/svg/whyus/microscope.svg";
import plus from "@/public/svg/whyus/plus.svg";
import stars from "@/public/svg/whyus/stars.svg";

export default function Services() {
    const services = [
        {
            title: "28 лет опыта работы",
            icon: material
        },
        {
            title: "Современные методы лечения",
            icon: microscope
        },
        {
            title: "Индивидуальный подход к каждому пациенту",
            icon: stars
        },
        {
            title: "Высокая квалификация и профессионализм",
            icon: plus
        }
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 mt-[100px] mdx:mt-[150px]">
            <h2 className="font-bold text-[25px] mdx:text-[35px] xl:text-[40px] mb-[25px] mdx:mb-[30px]">Преимущества работы с эндокринологом</h2>
            <div className="grid grid-cols-1 mdx:grid-cols-2 xl:grid-cols-4 gap-[12px] mdx:gap-[16px] xl:gap-[20px]">
                {services.map((service, index) => (
                    <div key={index} className=" p-[24px] rounded-xl flex flex-col items-center border-[#EFEFEF] border " style={{ boxShadow: "0px 0px 50px 0px rgba(58, 71, 91, 0.05)" }}>
                        <Image src={service.icon} alt={service.title} className="mb-[20px] mdx:mt-[40px]" />
                        <h3 className={`max-w-[177px] text-[18px] mdx:text-[22px] xl:text-[25px] font-semibold text-center ${index === 0 ? 'max-w-[177px]' : 'max-w-[250px]'}`}>{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
