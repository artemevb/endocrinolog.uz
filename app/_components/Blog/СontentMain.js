import Link from "next/link";
import Image from "next/image";
import Back from "@/app/_components/Blog/Back";
import Doc from "@/public/images/face/Doc_width.png";
import Doc2 from "@/public/images/face/Vstavka.png";

import telegram from "@/public/svg/icons/telegram-blue.svg";
import facebook from "@/public/svg/icons/facebook-blue.svg";
import inst from "@/public/svg/icons/Inst-blue.svg";

import arrow_left from "@/public/svg/tools/arrow-blue.svg";

const otherNews = [
    {
        title: 'Советы при гормональном нарушении',
        icon: arrow_left,
    },
    {
        title: 'Заголовок новости более чем в две строки дожен выглядеть таким образом',
        icon: arrow_left,
    },
    {
        title: 'Онлайн-консультация по вопросам эндокринологии',
        icon: arrow_left,
    },
    {
        title: 'Новая программа профилактики сахарного диабета',
        icon: arrow_left,
    },
    {
        title: 'Открыт новый набор на индивидуальные консультации',
        icon: arrow_left,
    },
    {
        title: 'Открыт новый набор на индивидуальные консультации',
        icon: arrow_left,
    },
];

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

export default function ContentMain() {


    return (
        <div className="w-full mx-auto mb-[80px] mdx:mb-[100px] xl:mb-[140px] max-w-[1440px] px-[15px]">
            <div className="mt-[25px] mb-[16px]">
                <Back />
            </div>
            <div className="w-full 2xl:grid 2xl:grid-cols-[60%_38%] 2xl:gap-[40px] 3xl:gap-[60px]">
                <div>
                    <h1 className="text-[25px] mdx:text-[30px] mdl:text-[35px] xl:text-[40px] font-bold lh">Открыт новый набор на индивидуальные консультации</h1>
                    <p className="text-[15px] mdx:text-[17px] xl:text-[18px] mt-3">Рады сообщить, что открыт новый набор на индивидуальные консультации с эндокринологом Азизой Шахзадаевной. Теперь вы можете получить профессиональную помощь в удобное для вас время. Запишитесь на консультацию прямо сейчас и начните путь к здоровью!</p>
                    <div className="mt-[25px] mb-[45px] mdx:mb-[55px] xl:mb-[75px] xl:mt-[30px]">
                        <Image
                            src={Doc}
                            height={1000}
                            width={1100}
                            alt={'Doctor'}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <h2 className="text-[20px] mdx:text-[24px] xl:text-[25px] font-semibold">Специализация и опыт</h2>
                    <p className="mt-[12px] mb-[40px] text-[15px] mdx:text-[17px] xl:text-[18px] mdx:mb-[60px]  xl:mt-[16px] xl:mb-[80px]">Эндокринолог Азиза Шахзадэевна — это врач с многолетним опытом и глубокой экспертизой в области эндокринологии. Она специализируется на диагностике и лечении различных заболеваний эндокринной системы, включая нарушения работы щитовидной железы, диабет, ожирение и метаболические синдромы. Благодаря своей высокой квалификации и внимательному подходу, Азиза Шахзадэевна помогает пациентам достичь устойчивого улучшения здоровья.</p>
                    <h2 className="text-[20px] mdx:text-[24px] xl:text-[25px] font-semibold">Преимущества консультаций</h2>
                    <ul class="list-disc pl-6 space-y-2 text-[15px] mdx:text-[17px] xl:text-[18px]">
                        <li>Комплексное обследование и точную диагностику.</li>
                        <li>Персонализированный план лечения с учетом всех индивидуальных особенностей.</li>
                        <li>Поддержку и рекомендации по улучшению качества жизни и профилактике заболеваний.</li>
                    </ul>
                    <div className="mt-[30px] mb-[40px] mdx:mb-[60px] xl:mb-[75px]">
                        <Image
                            src={Doc2}
                            height={1000}
                            width={1100}
                            alt={'medical equipment'}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <h2 className="text-[20px] mdx:text-[24px] xl:text-[25px] font-semibold">Количество мест ограничено!</h2>
                    <p className="mt-[12px]  pb-[16px] mdx:pb-[25px] xl:mt-[16px] xl:pb-[30px] border-b text-[15px] mdx:text-[17px] xl:text-[18px]">Не упустите возможность получить консультацию у ведущего эндокринолога! Количество мест ограничено, поэтому рекомендуем записаться заранее, чтобы обеспечить себе качественное медицинское обслуживание от специалиста высочайшего уровня</p>
                    <div className="flex flex-row justify-between items-center pt-[16px] mdx:pt-[30px]">
                        <div className="text-[#B8B8B8]">14 августа 2024 г.</div>
                        <div className="flex flex-row gap-[12px]">
                            <Image
                                src={inst}
                                height={30}
                                width={30}
                                alt={'instagram'}
                                className="w-full h-auto max-w-[25px] mdx:max-w-[30px]"
                            />
                            <Image
                                src={telegram}
                                height={30}
                                width={30}
                                alt={'telegram'}
                                className="w-full h-auto max-w-[25px] mdx:max-w-[30px]"
                            />
                            {/* <Image
                                src={facebook}
                                height={30}
                                width={30}
                                alt={'facebook'}
                                className="w-full h-auto max-w-[25px] mdx:max-w-[30px]"
                            /> */}
                        </div>
                    </div>
                </div>
                <div className="mt-[100px] 2xl:mt-0">
                    <h2 className="font-bold text-[20px] mdx:text-[22px]">Другие новости</h2>
                    <div className="mt-[24px] slg:grid slg:grid-cols-2 slg:gap-[35px] 2xl:grid-cols-1 2xl:gap-[10px] 2xl:mt-[5px]">
                        {otherNews.map((news, index) => (
                            <div key={index}>
                                <h3 className="text-[18px] mdx:text-[20px] font-semibold mt-2 ">
                                    {truncateText(news.title, 56)}
                                </h3>
                                <button className="text-[#3FAEFF] flex flex-row items-center gap-2 w-full font-bold text-[16px] border-b pb-[20px]">
                                    Полная статья
                                    <Image
                                        src={news.icon}
                                        height={30}
                                        width={30}
                                        alt={'arrow icon'}
                                        className="w-full h-auto max-w-[25px] mdx:max-w-[30px]"
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}