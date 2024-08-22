import BgUp from "@/app/_components/Blog/BgUp";
import Blogs from "@/app/_components/Blog/Blogs";
import Connect from "@/app/_components/Main/Connect";


export default function Blog() {
  return (
    <div className="mb-[90px] mdx:mb-[120px] xl:mb-[160px]">
      <BgUp />
      <Blogs />
      <Connect />
    </div>
  );
}