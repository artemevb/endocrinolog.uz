"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ navOptions }) {
  let pathname = usePathname();

  // Фильтрация навигационных элементов в зависимости от текущего пути
  const filteredNavOptions = navOptions.filter((item) => {
    if (pathname === "/" && item.slug === "/") {
      return false; // Не показывать "Главная" на главной странице
    }
    if (pathname === "/blog" && (item.slug === "blog" || item.slug === "reviews")) {
      return false; // Не показывать "Блог" и "Отзывы" на странице блога
    }
    if (pathname.indexOf('/blog/') !== -1  && (item.slug === "reviews")) {
      return false; // Не показывать "Блог" и "Отзывы" на странице блога
    }
    return true;
  });

  console.log(pathname)

  const handleScrollToSection = (slug) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="h-full flex gap-10 items-center max-slg:hidden">
      {filteredNavOptions.map((item, i) => {
        if (item.slug === "reviews" || item.slug === "contacts") {
          return (
            <div
              key={i}
              onClick={() => handleScrollToSection(item.slug)}
              className="cursor-pointer text-[#252324] text-[18px] hover:text-gray-400 transition-all duration-300 whitespace-nowrap font-semibold"
            >
              {item.title}
            </div>
          );
        }

        return (
          <Link href={`/${item.slug}`} key={i}>
            <div className="text-[#252324] text-[18px] hover:text-gray-400 transition-all duration-300 whitespace-nowrap font-semibold">
              {item.title}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
