"use client";
import RightIcon from "@/app/_components/Icons/RightIcon";
import Image from "next/image";
import Link from "next/link";
import close from "@/public/svg/close.svg";
import logo from "@/public/images/logo-a.png";
import { usePathname } from "next/navigation";

const Menu = ({ menu, closeMenu }) => {
  const pathname = usePathname();

  const handleButtonClick = (buttonType) => {
    fetch(`http://localhost:8150/counter/add?button=${buttonType}`, {
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

  const handleScrollToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
    handleButtonClick('MAKE_AN_APPOINTMENT'); // Добавляем отслеживание клика
    closeMenu();
  };

  const handleScrollToContacts = () => {
    const formSection = document.getElementById("contacts");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };
  const handleScrollToReviews = () => {
    const formSection = document.getElementById("reviews");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <div
      className={`fixed z-[9999] top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.50)] shadow-md ${menu ? "transform translate-x-0" : "transform translate-x-full"
        }`}
    >
      <div className="border-b py-4 flex bg-white">
        <div className="w-full flex justify-between mx-2 items-center">
          <Link href="/" className="w-auto items-center flex">
            <Image
              src={logo}
              width={300}
              height={300}
              alt="ASH Logo"
              className="h-[40px] w-auto"
            />
          </Link>
          <div className="flex gap-2">
            <button
              className="rounded-xl bg-[#3FAEFF] text-[#fff] px-[11px] py-[8px] mdx:text-[16px] text-[14px] mdl:px-[18px] font-bold xl:px-[25px]"
              onClick={handleScrollToForm}
            >
              Записаться на прием
            </button>
            <div className="flex justify-between items-center gap-4">
              <button onClick={closeMenu} className="flex items-center justify-center">
                <Image
                  src={close}
                  height={100}
                  width={100}
                  alt={`Tools Item CloseIcon : Close Menu`}
                  className="w-[40px] h-[40px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex flex-col font-semibold">
        {pathname !== "/" && (
          <Link
            onClick={closeMenu}
            href={`/`}
            className="py-4 border-b bg-white"
          >
            <div className="flex justify-start gap-2 mx-4 text-[16px] font-semibold">
              <p>Главная</p>
              <RightIcon />
            </div>
          </Link>
        )}
        {pathname !== "/blog" && (
          <Link
            onClick={closeMenu}
            href={`/blog`}
            className="py-4 border-b bg-white"
          >
            <div className="flex justify-start gap-2 mx-4 text-[16px] font-semibold">
              <p>Блог</p>
              <RightIcon />
            </div>
          </Link>
        )}
        {pathname.indexOf('/blog') === -1 && (
          <button
            className="py-4 border-b bg-white"
            onClick={handleScrollToReviews}
          >
            <div className="flex justify-start gap-2 mx-4 text-[16px] font-semibold">
              <p>Отзывы</p>
              <RightIcon />
            </div>
          </button>
        )}
        <button
          className="py-4 border-b bg-white"
          onClick={handleScrollToContacts}
        >
          <div className="flex justify-start gap-2 mx-4 text-[16px] font-semibold">
            <p>Контакты</p>
            <RightIcon />
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Menu;
