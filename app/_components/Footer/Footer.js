"use client"
import telegram from "@/public/svg/icons/telegram_black.svg";
import facebook from "@/public/svg/icons/facebook.svg";
import instagram from "@/public/svg/icons/Inst.svg";
import resultLogo from "@/public/svg/icons/result-logo.png";
import Image from "next/image";

export default function Footer() {
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

  return (
    <div id="contacts" className="bg-snowy w-full pt-12 ">
      <div className="w-full max-w-[1440px] flex flex-col gap-12 mx-auto px-2">
        <div className="w-full grid grid-cols-2 gap-y-4 lg:flex lg:justify-between lg:flex-wrap">
          <div className="flex flex-col text-sm gap-4 max-w-[180px] mdx:max-w-[223px] text-[#808080]">
            <h2 className="text-[16px] mdx:text-[22px] font-bold text-[#252324]">Адрес клиники</h2>
            <a
              href="https://maps.app.goo.gl/8HV3XzRxo6uGy9er6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[15px] mdx:text-[18px] text-[#161616]">
                Узбекистан, г. Ташкент, Амир Темур, 39
              </p>
            </a>
          </div>

          <div className="flex flex-col text-sm gap-4 max-w-[223px] text-[#808080]">
            <h2 className="text-[16px] mdx:text-[22px] font-bold text-[#252324]">График работы</h2>
            <p className="text-[15px] mdx:text-[18px] text-[#161616]">8.00 - 15.00, Пн-Пт</p>
          </div>

          <div className="flex flex-col text-sm gap-4 max-w-[223px] text-[#808080]">
            <h2 className="text-[16px] mdx:text-[22px] font-bold text-[#252324]">Телефон клиники</h2>
            <a href="tel:+998781407887" className="text-[15px] mdx:text-[18px] text-[#161616]">
              +998 (78) 140 7887
            </a>
          </div>

          <div className="flex items-start flex-col gap-3">
            <h2 className="text-[16px] mdx:text-[22px] font-bold text-[#252324]">Социальные сети</h2>
            <div className="flex flex-row gap-4">
              <a href="https://t.me/endo_krinolog" target="_blank" onClick={() => handleButtonClick('TELEGRAM_FOOTER')}>
                <Image
                  src={telegram}
                  width={40}
                  height={40}
                  alt="Telegram"
                  className="w-[25px] h-[25px] mdx:w-[30px] mdx:h-[30px]"
                />
              </a>
              {/* <a href="https://www.facebook.com/intermed.mindray" target="_blank">
                <Image
                  src={facebook}
                  width={40}
                  height={40}
                  alt="Facebook"
                  className="w-[25px] h-[25px] mdx:w-[30px] mdx:h-[30px]"
                />
              </a> */}
              <a href="https://www.instagram.com/azizadjurayeva1605/?locale=undefined&hl=am-et#" target="_blank" onClick={() => handleButtonClick('INSTAGRAM_FOOTER')}>
                <Image
                  src={instagram}
                  width={40}
                  height={40}
                  alt="Instagram"
                  className="w-[25px] h-[25px] mdx:w-[30px] mdx:h-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <hr className="w-full absolute flex items-center right-2" />
          <div className="my-6 w-full flex justify-between items-center">
            <p className="w-full max-mdx:max-w-[150px] text-[#808080]">
              2024 © Азиза Шахзадэевна. Все права защищены
            </p>
            <a href="https://result-me.uz" target="_blank">
              <Image
                src={resultLogo}
                width={500}
                height={500}
                alt="Result Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.356922095781!2d69.27975407587405!3d41.30109837131091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad3dc7840d5%3A0x6cc193476abb6d8!2z0L_RgNC-0YHQv9C10LrRgiDQkNC80LjRgNCwINCi0LXQvNGD0YDQsCAzOSwgMTAwMDYxLCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1723533757595!5m2!1sru!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} className="xl:h-[500px]"></iframe>
    </div>
  );
}
