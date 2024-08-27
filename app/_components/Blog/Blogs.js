"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import arrow_blue from "@/public/svg/tools/arrow-blue.svg";
import blog1 from "@/public/images/blogs/card1.png";
import blog2 from "@/public/images/blogs/card2.png";
import blog3 from "@/public/images/blogs/card3.png";
import blog4 from "@/public/images/blogs/card4.png";
import blog5 from "@/public/images/blogs/card5.png";
import blog6 from "@/public/images/blogs/card6.png";
import blog7 from "@/public/images/blogs/card7.png";
import blog8 from "@/public/images/blogs/card8.png";
import blog9 from "@/public/images/blogs/card9.png";

export default function Blogs() {
    const [trimmedReviews, setTrimmedReviews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const reviews = [
        {
            imageSrc: blog1,
            title: "Открыт новый набор на индивидуальные консультации",
            description:
                "Рады сообщить, что открыт новый набор на индивидуальные консультации с эндокринологом Азизой Шахзадаевной. Теперь вы можете получить профессиональную помощь в удобное для вас время. Запишитесь на консультацию прямо сейчас и начните путь к здоровью!",
        },
        {
            imageSrc: blog2,
            title: "Советы при гормональном нарушении",
            description:
                "В этой статье мы составили список рекомендаций при гормональном нарушени",
        },
        {
            imageSrc: blog3,
            title: "Онлайн-консультация по вопросам эндокринологии",
            description:
                "Cовременные методы лечения и постоянный мониторинг состояния здоровья",
        },
        {
            imageSrc: blog4,
            title: "Новая программа профилактики сахарного диабета",
            description:
                "С сентября запускается новая программа профилактики сахарного диабета. Программа включает комплексное обследование, рекомендации по питанию и физической активности, а также персональные консультации для предупреждения развития заболевания. Следите за своим здоровьем вместе с нами!",
        }
        ,
        {
            imageSrc: blog5,
            title: "Что такое эндокринология?",
            description:
                "Эндокринология — важнейшая область медицины, изучающая деятельность желёз внутренней секреции, гормональных нарушений в организме. Гормоны играют центральную роль в регуляции практически всех процессов жизнедеятельности, от обмена веществ, роста, развития до репродуктивных функций и психоэмоционального состояния. Основные железы, за которыми следит эндокринология, — это щитовидная, поджелудочная, гипофиз, надпочечники, половые железы.",
        }
        ,
        {
            imageSrc: blog6,
            title: "Эндокринология сегодня: открытия и нововведения",
            description:
                "Современная эндокринология — это динамично развивающаяся область медицины, где постоянно появляются новые методы диагностики и лечения. Среди основных направлений изучения этой сферы является разработка инновационных методов лечения сахарного диабета. Новые препараты и устройства, такие как инсулиновые помпы с функцией мониторинга глюкозы в реальном времени, делают управление диабетом более удобным и эффективным.",
        }
        ,
        {
            imageSrc: blog7,
            title: "Тренды эндокринологии 2024 года",
            description:
                "Эндокринология продолжает развиваться быстрыми темпами, и 2024 год уже несет новые тенденции и инновации. Один из них — это углубление в область персонализированной медицины, когда лечение подбирается с учетом генетического профиля пациента, его образа жизни и других индивидуальных особенностей. Это позволяет более точно диагностировать заболевания и назначать наиболее эффективное лечение.",
        }
        ,
        {
            imageSrc: blog8,
            title: "Будущее эндокринологии: какие технологии нас ждут?",
            description:
                "Будущее эндокринологии включает внедрение передовых технологий и новых подходов к лечению. Одна из перспективных областей — это биоинженерия, которая разрабатывает методы создания искусственных желез и замены поврежденных тканей. Ученые работают над искусственной поджелудочной железой, которая может стать прорывом в лечении диабета 1 типа.",
        }
        ,
        {
            imageSrc: blog9,
            title: "Роль эндокринологии в поддержании женского здоровья",
            description:
                "Женское здоровье тесно связано с работой гормональной системы, и эндокринология играет здесь ключевую роль. Гормональные сбои могут существенно влиять на качество жизни женщины. Эндокринолог помогает диагностировать и корректировать такие состояния, обеспечивая правильный гормональный баланс.",
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            const updatedReviews = reviews.map((review) => {
                const maxLengthDescription = window.innerWidth >= 1000 ? 57 : 69;
                const maxLengthTitle = 54;

                return {
                    ...review,
                    title:
                        review.title.length > maxLengthTitle
                            ? review.title.substring(0, maxLengthTitle) + "..."
                            : review.title,
                    description:
                        review.description.length > maxLengthDescription
                            ? review.description.substring(0, maxLengthDescription) + "..."
                            : review.description,
                };
            });
            setTrimmedReviews(updatedReviews);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const visibleReviews = showAll ? trimmedReviews : trimmedReviews.slice(0, 12);

    return (
        <div className="w-full max-w-[1440px] px-[15px] mx-auto mt-[100px] mdx:mt-[120px] xl:mt-[170px] mb-[100px] mdx:mb-[120px] xl:mb-[170px] ">
            <h2 className="text-[25px] mdx:text-[30px] slg:text-[35px] xl:text-[40px] font-bold">
                Статьи
            </h2>
            <div className="grid grid-cols-1 mdx:grid-cols-2 xl:grid-cols-4 gap-5 mt-7 ">
                {visibleReviews.map((review, index) => (
                    <div className="flex flex-col justify-between h-full border p-4  rounded-[20px]">
                        <div className="relative w-full pb-[56.25%]"> 
                            <Image
                                src={review.imageSrc}
                                layout="fill"
                                objectFit="cover"
                                alt={review.title}
                                className="rounded-[15px]"
                            />
                        </div>
                        <h3 className="font-bold text-[20px] mdl:text-[24px] mt-4 lh">
                            {review.title}
                        </h3>
                        <p className="text-[14px] mdl:text-[18px] text-[#737373] mt-2 lh flex-grow">
                            {review.description}
                        </p>
                        <a href="https://t.me/endo_krinolog" target="_blank">
                            {/* <Link href={`/blog/${visibleReviews.link}`} key={index}> */}
                            <div className="flex items-center mt-4">
                                <button className="text-[16px] mdx:text-[20px] font-bold text-[#3FAEFF]">
                                    Полная статья
                                </button>
                                <Image
                                    src={arrow_blue}
                                    height={21}
                                    width={21}
                                    alt="arrow"
                                    className="w-[21px] h-auto ml-2"
                                />
                            </div>
                            {/* </Link> */}
                        </a>
                    </div>
                ))}
            </div>
            {!showAll && (
                <div className="text-center mt-8">
                    <button
                        className="text-[16px] rounded-xl mdx:text-[20px] font-bold text-[#3FAEFF] border border-[#3FAEFF] px-[74px] py-[12px]"
                        onClick={() => setShowAll(true)}
                    >
                        Загрузить всё
                    </button>
                </div>
            )}
        </div>

    );
}
