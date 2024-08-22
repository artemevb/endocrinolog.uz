"use client";
import { useState } from "react";
import Image from "next/image";
import burgerMenu from "@/public/svg/tools/burger-menu.svg";
import Menu from "../Menu";
import Link from "next/link";

export default function Tools({ navOptions }) {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleButtonClick = (buttonType) => {
    fetch(`https://endocrinolog.uz/api/counter/add?button=${buttonType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "*/*",
      }
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

  const handleScrollToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
    handleButtonClick('MAKE_AN_APPOINTMENT'); // Отслеживание клика
  };

  return (
    <div className="h-full items-center flex mdx:gap-3 px-1 py-3">
      <button
        onClick={handleScrollToForm}
        className="rounded-[10px] bg-[#3FAEFF] text-[#fff] px-[9.5px] py-[9px] text-[14px] mdx:text-[16px] text-base mdx:py-[11px] mdl:px-[18px] font-bold xl:px-[25px]"
      >
        Записаться на прием
      </button>

      <button
        onClick={handleOpenMenu}
        className="slg:hidden max-mdx:px-1"
      >
        <Image
          src={burgerMenu}
          height={100}
          width={100}
          alt={`Tools Item Burger Menu`}
          className="w-[40px] h-[40px]  max-mdx:ml-1"
        />
      </button>
      {menu ? (
        <Menu menu={menu} closeMenu={handleCloseMenu} navOptions={navOptions} />
      ) : null}
    </div>
  );
}
