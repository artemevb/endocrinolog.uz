import ContentMain from "@/app/_components/Blog/СontentMain";
import Connect from "@/app/_components/Main/Connect";


export default function BlogMain() {
  return (
    <div className="mb-[90px] mdx:mb-[120px] xl:mb-[160px]">
      <ContentMain />
      <Connect />
      <a href="https://interlab.uz/" className="visually-hidden"></a>
      <a href="https://interlab.uz/ru/services" className="visually-hidden"></a>
      <a href="https://interlab.uz/ru/about" className="visually-hidden"></a>
      <a href="https://imed.uz/" className="visually-hidden"></a>
      <a href="https://imed.uz/ru/categories" className="visually-hidden"></a>
      <a href="https://imed.uz/ru/partners" className="visually-hidden"></a>
    </div>
  );
}