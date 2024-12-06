import BgUp from "@/app/_components/Blog/BgUp";
import Blogs from "@/app/_components/Blog/Blogs";
import Connect from "@/app/_components/Main/Connect";


export default function Blog() {
  return (
    <div className="mb-[90px] mdx:mb-[120px] xl:mb-[160px]">
      <BgUp />
      <Blogs />
      <Connect />
      <a href="https://rmcdeluxe.com/" className="visually-hidden"></a>
      <a href="https://rmcdeluxe.com/ru/blog" className="visually-hidden"></a>
      <a href="https://rmcdeluxe.com/ru/contacts" className="visually-hidden"></a>
      <a href="https://europol.uz/" className="visually-hidden"></a>
      <a href="https://europol.uz/about" className="visually-hidden"></a>
      <a href="https://europol.uz/projects" className="visually-hidden"></a>
    </div>
  );
}