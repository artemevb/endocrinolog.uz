
import Skills from "@/app/_components/Main/Skills";
import AboutUs from "@/app/_components/Main/AboutUs";
import Services from "@/app/_components/Main/Services";
import WhyUs from "@/app/_components/Main/WhyUs";
import SliderReviews from "@/app/_components/Main/SliderReviews";
import Connect from "./Connect";
import Blogs from "./Blogs";
import PayOnce from "./PayOnce";

export default function Main() {
  return (
    <div className="w-full bg-white flex flex-col">
      <AboutUs />
      <Skills />
      <PayOnce />
      <Services />
      <WhyUs />
      <SliderReviews />
      <Connect />
      <Blogs />
    </div>
  );
}
