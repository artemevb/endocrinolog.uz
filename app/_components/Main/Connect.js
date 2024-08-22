"use client";
import { useState } from "react";
import Image from "next/image";
import Doc from "@/public/images/face/Doc.png";
import Doc_bg from "@/public/images/face/Doc_bg.png";
import Telegram from "@/public/svg/icons/telegram_blue.svg";
import Phone from "@/public/svg/tools/phone-blue.png";
import Complete from "../Modals/Complete";

export default function ContAddress() {
    const [values, setValues] = useState({
        fullName: "",
        phoneNum: "",
        comment: "",
    });
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = () => {
        setLoading(true);
        fetch('https://endocrinolog.uz/api/comment/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    throw new Error(`Server responded with status ${response.status}`);
                }
            })
            .then(data => {
                console.log(data);
                setValues({
                    fullName: "",
                    phoneNum: "",
                    comment: "",
                });
                setLoading(false);
                setIsModalOpen(true); // Open the modal on success
                // Отправка клика для кнопки SIGN_UP
                handleButtonClick('SIGN_UP');
            })
            .catch(e => {
                console.error("Error in application", e);
                alert("Something went wrong");
                setLoading(false);
            });
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

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div id="form" className="p-3 mx-auto max-w-[1440px] w-full mt-[100px] mdx:mt-[120px] xl:mt-[170px]">
            <div className="bg-[#F1F4F8] p-3 rounded-3xl mdx:p-[20px] xl:flex xl:flex-row xl:gap-[60px] max-w-[1440px]" >
                <div className="xl:w-full xl:max-w-[427px]">
                    <Image
                        src={Doc}
                        height={1000}
                        width={1000}
                        alt={"Doctor"}
                        className="w-full h-auto rounded-2xl bg-[#3FAEFF] mdx:hidden xl:block"
                    />
                    <Image
                        src={Doc_bg}
                        height={1000}
                        width={1000}
                        alt={"Doctor"}
                        className="w-full h-auto rounded-2xl bg-[#3FAEFF] hidden mdx:block xl:hidden"
                    />
                </div>
                <div className="xl:max-w-[570px]">
                    <div className="text-left mt-4">
                        <h3 className="lh text-[25px] mdx:text-[35px] xl:text-[40px] font-bold text-[#3FAEFF]">Забота о вашем здоровье начинается здесь</h3>
                        <p className="text-[#737373] mt-2 font-semibold text-[14px] mdx:text-[18px]">
                            Запишитесь на консультацию к опытному эндокринологу и получите индивидуальный план лечения
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                                placeholder="ФИО"
                                className="w-full p-3 border border-[#F1F4F8] rounded-xl focus:outline-none focus:border-[#3FAEFF]"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="phoneNum"
                                value={values.phoneNum}
                                onChange={handleInputChange}
                                placeholder="Номер телефона"
                                className="w-full p-3 border border-[#F1F4F8] rounded-md focus:outline-none focus:border-[#3FAEFF]"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="comment"
                                value={values.comment}
                                onChange={handleInputChange}
                                placeholder="Комментарий"
                                className="w-full p-3 border border-[#F1F4F8] rounded-md focus:outline-none focus:border-[#3FAEFF]"
                            />
                        </div>
                        <div className="mdx:flex mdx:space-x-4 pb-[10px]">
                            <button
                                onClick={() => {
                                    setLoading(true);
                                    handleSave();
                                }}
                                className="w-full bg-[#3FAEFF] text-white py-3 rounded-lg hover:bg-[#3FAEFF] text-[14px] font-bold mdx:text-[16px] mdx:flex-1 mdx:max-w-[202px] flex items-center justify-center"
                            >
                                {loading ? "Отправляется" : "Записаться"}
                            </button>
                            <a href="https://t.me/+998933805505" target="_blank" 
                               onClick={() => handleButtonClick('TELEGRAM')}
                               className="w-full border border-[#3FAEFF] text-[#3FAEFF] py-3 rounded-lg flex items-center justify-center text-[14px] font-bold mdx:text-[16px] mdx:flex-1 mt-4 mdx:mt-0 mdx:max-w-[202px]">
                                Telegram
                                <Image
                                    src={Telegram}
                                    height={50}
                                    width={50}
                                    alt={"Telegram"}
                                    className="max-mdx:w-[24px] max-mdx:h-[24px] w-[28px] h-[28px] ml-2"
                                />
                            </a>
                            <a href="tel:+998933805505" 
                               onClick={() => handleButtonClick('CALL')}
                               className="w-full border border-[#3FAEFF] text-[#3FAEFF] py-3 rounded-lg flex items-center justify-center text-[14px] font-bold mdx:text-[16px] mdx:flex-1 mt-4 mdx:mt-0 mdx:max-w-[202px]">
                                Позвонить
                                <Image
                                    src={Phone}
                                    height={50}
                                    width={50}
                                    alt={"Телефон"}
                                    className="max-mdx:w-[24px] max-mdx:h-[24px] w-[28px] h-[28px] ml-2"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Complete isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
