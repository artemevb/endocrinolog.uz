"use client";
import React from "react";
import Image from "next/image";
import close from "@/public/svg/close-black.svg";

const ReviewModal = ({ review, isOpen, onClose }) => {
    if (!isOpen) return null;

    const renderImageOrInitial = (review) => {
        if (review.imageSrc) {
            return (
                <Image
                    src={review.imageSrc}
                    height={70}
                    width={70}
                    alt={review.name}
                    className="w-[50px] h-[50px] mdx:w-[69px] mdx:h-[69px] rounded-full"
                />
            );
        } else {
            const initial = review.name.charAt(0).toUpperCase();
            return (
                <div className="w-[50px] h-[50px] mdx:w-[69px] mdx:h-[69px] rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-[20px] mdx:text-[24px] font-semibold text-white">{initial}</span>
                </div>
            );
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-7 rounded-3xl max-w-[90%] slg:max-w-[710px] mx-auto overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4"
                >
                    <Image
                        src={close}
                        height={24}
                        width={24}
                        alt={`close`}
                        className="w-7 h-7"
                    />
                </button>
                <div className="overflow-y-auto max-h-[80vh] custom-scrollbar">
                    <div className="flex items-center mb-4">
                        {renderImageOrInitial(review)}
                        <div className="ml-3">
                            <h3 className="font-bold text-[18px] mdx:text-[20px]">{review.name}</h3>
                            <div className="flex items-center">
                                {Array(review.rating)
                                    .fill()
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 mdx:w-5 mdx:h-5 text-[#3FAEFF]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049.927L11.9 6.49l6.358.464-4.835 3.897 1.613 6.065L9.05 12.09l-5.986 4.826L4.677 10.85.844 6.952l6.355-.463L9.049.927z" />
                                        </svg>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-[15px] mdx:text-[18px] mb-4">{review.review}</p>
                    <div className="absolute right-0 bottom-0 p-2">
                        <p className="text-right text-[14px] mdx:text-[18px] text-[#B8B8B8] mr-4">{review.clinics}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
