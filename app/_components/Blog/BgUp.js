import Image from "next/image";
import MedicalEquipment from "@/public/images/blogs/MedicalEquipment.png";
import FullMedicalEquipment from "@/public/images/blogs/FullMedicalEquipment.png";

export default function BgUp() {



    return (
        <div className="w-full mx-auto mb-[100px] mdx:mb-[120px] xl:mb-[170px] ">
            <div className="bg-[#F1F4F8]  mdx:px-[15px] w-full">
                <div className="flex flex-row relative mx-auto max-w-[1440px]">
                    <div className="py-[30px] max-w-[220px] pl-[15px] xl:max-w-[640px] mdx:pl-[0] mdx:py-[60px] xl:py-[70px]">
                        <h2 className="text-[25px] mdx:text-[30px] slg:text-[35px] xl:text-[40px] font-bold">
                            Блог
                        </h2>
                        <p className="text-[14px] mdx:text-[18px] xl:text-[20px] font-semibold text-[#737373]">Полезные статьи и новости о здоровье и эндокринологии</p>
                    </div>
                    <div className="absolute right-0 max-mdx:top-5 mdx:bottom-0 ">
                        <Image
                            src={MedicalEquipment}
                            height={500}
                            width={500}
                            alt={'medical equipment'}
                            className="w-full min-w-[120px] h-auto mdx:hidden bottom-0"
                        />
                        <Image
                            src={FullMedicalEquipment}
                            height={1000}
                            width={1000}
                            alt={'medical equipment'}
                            className="w-full min-w-[200px] max-w-[220px] h-auto hidden mdx:block bottom-0"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
