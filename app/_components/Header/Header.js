import Logo from "@/app/_components/Header/Logo";
import Navigation from "@/app/_components/Header/Navigation";
import Tools from "@/app/_components/Header/Tools";

export default function Header() {
  const data = [
    {
      title: 'Главная',
      slug: '/',
    },
    {
      title: 'Блог',
      slug: 'blog',
    },
    {
      title: 'Отзывы',
      slug: 'reviews', 
    },
    {
      title: 'Контакты',
      slug: 'contacts', 
    },
  ];

  return (
    <header className="w-full bg-white px-2 h-[84px] max-mdx:h-[80px]">
      <div className="w-full max-w-[1440px] flex items-center justify-between gap-[5px] mdx:gap-2 h-full mx-auto">
        <Logo />
        <Navigation navOptions={data} />
        <Tools navOptions={data} />
      </div>
    </header>
  );
}

