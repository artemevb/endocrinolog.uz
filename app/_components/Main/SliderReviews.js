"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewModal from '../Modals/Reviews';

import eventImage4 from "@/public/images/face/Ellipse1.png";

const reviews = [
    {
        name: "Галина Филиппова",
        rating: 5,
        review: "Добрый вечер,6 января сделали Марине операцию на второй глаз,Слава Богу ,успешно, теперь видит обоими глазками.Мы очень рады.Еще раз спасибо Вам за участие,поддержку и за добрые слова!Вы замечательный человек,большая УМНИЦА!Желаем Вам и всей Вашей семье здоровья,всех земных благ и большого счастья!",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Насиба Ганиева",
        rating: 0,
        review: "Спасибо большое Вам за отзывчивость",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Aziza",
        rating: 5,
        review: "Азиза опа эта ваша заслуга! Энг кийин пайтда сиз бизага котта ердам бердиз и шу кунгача бериб кевосиз. Мы Вам очень благодарны!",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Галина Филиппова",
        rating: 5,
        review: "Добрый вечер,6 января сделали Марине операцию на второй глаз,Слава Богу ,успешно, теперь видит обоими глазками.Мы очень рады.Еще раз спасибо Вам за участие,поддержку и за добрые слова!Вы замечательный человек,большая УМНИЦА!Желаем Вам и всей Вашей семье здоровья,всех земных благ и большого счастья!",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Svetlana",
        rating: 0,
        review: "Я всегда рада буду вам что-то сделать как архитектор, дизайнер, чтобы какую то благодарность Вам выразить. Чтобы хорошим людям добро возращалось",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Dildora Rafikova",
        rating: 5,
        review: "Берегите себя!  Мы любим вас!❤️😘😘😘😘. Каждый ваш труд не забыт в нашем сердце , мы вас ценим.!",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Dildora Rafikova",
        rating: 5,
        review: "Здравствуйте Азиза Шахзодиевна! Как вы поживаете?  Хотела вас поблагодарить, за ваши добрые дела и любовь к людям. Вы многим моим  знакомым помогли . Мы все очень благодарны, что  Бог подарил вас нам!",
        imageSrc: null,
        clinics: "Telegram",
    },
    {
        name: "Тапия Фернандес",
        rating: 5,
        review: "Здравствуйте мой дорогой доктор Азиза опа, все нормализовалось себя чувствую хорошо, спасибо Вам большое и простите за то, что все время Вас беспокою.",
        imageSrc: null,
        clinics: "Telegram",
    },

];

const ReviewSlider = () => {
    const [selectedReview, setSelectedReview] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (review) => {
        setSelectedReview(review);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedReview(null);
    };

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const useTruncatedText = (text, defaultLength, mdxLength) => {
        const [truncatedText, setTruncatedText] = useState(text);
        const [isTruncated, setIsTruncated] = useState(false);

        useEffect(() => {
            const handleResize = () => {
                const isMdx = window.matchMedia('(min-width: 1440px)').matches;
                const maxLength = isMdx ? mdxLength : defaultLength;

                if (text.length > maxLength) {
                    setTruncatedText(text.slice(0, maxLength) + '...');
                    setIsTruncated(true);
                } else {
                    setTruncatedText(text);
                    setIsTruncated(false);
                }
            };

            handleResize(); // Call it initially to set the correct length
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [text, defaultLength, mdxLength]);

        return { truncatedText, isTruncated };
    };

    const ReviewText = ({ review }) => {
        const { truncatedText, isTruncated } = useTruncatedText(review.review, 258, 467);
        return (
            <>
                <p className="text-gray-600 mt-[20px] font-semibold text-[15px] mdx:text-[15px] mdx:mt-[30px]">
                    {truncatedText}
                </p>
                {isTruncated && (
                    <button
                        onClick={() => openModal(review)}
                        className="text-[#3FAEFF] hover:underline mt-3 block text-[16px] mdx:text-[20px] font-bold"
                    >
                        Весь отзыв →
                    </button>
                )}
            </>
        );
    };

    const renderImageOrInitial = (review) => {
        if (review.imageSrc) {
            return (
                <Image
                    src={review.imageSrc}
                    height={100}
                    width={100}
                    alt={review.name}
                    className="w-[50px] h-[50px] mdx:w-[60px] mdx:h-[60px] rounded-full"
                />
            );
        } else {
            const initial = review.name.charAt(0).toUpperCase();
            return (
                <div className="w-[50px] h-[50px] mdx:w-[60px] mdx:h-[60px] rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-[20px] mdx:text-[24px] font-semibold text-white">{initial}</span>
                </div>
            );
        }
    };

    return (
        <div className="container mx-auto p-4 mt-[100px] mdx:mt-[120px] xl:mt-[170px]">
            <h2 id="reviews" className="font-bold text-[25px] mdx:text-[35px] xl:text-[40px] mb-[25px] mdx:mb-[30px]">Отзывы</h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="p-2">
                        <div className="p-4 bg-white rounded-xl border min-h-[390px] mdx:min-h-[450px] relative">
                            <div className="flex items-center mb-2">
                                <div className="mr-2">
                                    {renderImageOrInitial(review)}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[18px] mdx:text-[20px]">{review.name}</h3>
                                    <div className="flex items-center">
                                        {Array(review.rating)
                                            .fill()
                                            .map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-[#3FAEFF]"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049.927L11.9 6.49l6.358.464-4.835 3.897 1.613 6.065L9.05 12.09l-5.986 4.826L4.677 10.85.844 6.952l6.355-.463L9.049.927z" />
                                                </svg>
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <ReviewText review={review} />
                            <div className="absolute right-0 bottom-0 p-2">
                                <p className="text-right text-[14px] mdx:text-[18px] text-[#B8B8B8]">{review.clinics}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <ReviewModal review={selectedReview} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default ReviewSlider;
