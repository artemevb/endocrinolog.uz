import doc_blue from "@/public/images/skills/doc_blue.png";
import doc_blue_width from "@/public/images/skills/doc_blue_width.png";
import Image from "next/image";

const sections = [
  {
    title: "ОПЫТ РАБОТЫ",
    items: [
      "Практикующий специалист с 28-летним опытом",
      "Клинический санаторий им. М. Фёдорович",
      "Центр развития профессиональной квалификации медицинских работников",
    ],
  },
  {
    title: "ДОСТИЖЕНИЯ",
    items: [
      "Множество успешных случаев лечения",
      "Участие в международных конференциях",
    ],
  },
  {
    title: "ОБРАЗОВАНИЕ",
    items: ["Кандидат медицинских наук"],
  },
  {
    title: "НАГРАДЫ",
    items: [
      "Награды и сертификаты за выдающиеся достижения в эндокринологии",
    ],
  },
];

export default function Skills() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 mt-[100px] mdx:mt-[150px]">
      <div className="mdx:grid max-mdx:grid-cols-1 xl:grid-cols-[1fr_2fr] mdx:gap-8 mdx:items-start max-mdx:flex max-mdx:flex-col-reverse">
        <div className="flex justify-center mt-2 mdx:hidden xl:block">
          <Image
            src={doc_blue}
            height={2000}
            width={2600}
            alt="Doc Blue"
            className="w-full h-auto xl:max-h-[570px] xl:max-w-[420px]"
          />
        </div>
        <div className="grid grid-cols-1 mdx:grid-cols-2 gap-6 font-semibold">
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-[22px] mdx:text-[25px] xl:text-[30px] pb-2 mb-2 border-b">{section.title}</h2>
              <ul className="list-none">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-[16px] text-[15px] mdx:text-[18px] xl:text-[20px] mdx:mb-[25px]">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-[30px] mdx:block hidden xl:hidden">
          <Image
            src={doc_blue_width}
            height={1100}
            width={1100}
            alt="Doc Blue"
            className="w-full h-auto"
          />
        </div>
    </div>
  );
}
