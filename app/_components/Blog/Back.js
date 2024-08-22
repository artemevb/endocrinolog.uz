"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated to the correct import for useRouter in the client
import Arrow_back from "@/public/svg/arrow_back.svg";

export default function Back() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[79px] mdx:max-w-[94px]">
      <button
        className="w-full text-[#3FAEFF] font-bold text-[16px] mdx:text-[20px] flex items-center justify-between"
        onClick={() => router.back()}
      >
        <Image
          src={Arrow_back}
          height={100}
          width={100}
          alt="arrow"
          className="w-full max-w-[19px] mdx:max-w-[21px] h-auto"
        />
        Назад
      </button>
    </div>
  );
}
