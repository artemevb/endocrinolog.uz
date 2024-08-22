"use client"
export default function Services() {

    const handleScrollToForm = () => {
        const formSection = document.getElementById("form");
        if (formSection) {
          formSection.scrollIntoView({ behavior: "smooth" });
        }
      };

    const services = [
        {
            title: "Диагностика и лечение диабета",
            description: "Комплексное обследование и индивидуальный подход к каждому пациенту",
        },
        {
            title: "Лечение заболеваний щитовидной железы",
            description: "Современные методы лечения и постоянный мониторинг состояния здоровья",
        },
        {
            title: "Гормональные нарушения",
            description: "Диагностика и коррекция гормонального фона",
        },
        {
            title: "Консультации по вопросам эндокринологии",
            description: "Профессиональные рекомендации и поддержка",
        }
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 mt-[100px] mdx:mt-[150px]">
            <h2 className="font-bold text-[25px] mdx:text-[35px] xl:text-[40px] mb-[25px] mdx:mb-[30px]">Услуги</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[24px]">
                {services.map((service, index) => (
                    <div key={index} className="bg-[#F1F4F8] p-[24px] rounded-xl">
                        <div className="mb-[40px]">
                            <h3 className="text-[20px] mdx:text-[24px] font-bold">{service.title}</h3>
                            <p className="text-[#737373] mt-[16px] font-semibold text-[14px] mdx:text-[16px] xl:text-[18px] max-w-[420px]">
                                {service.description}
                            </p>
                        </div>
                        <button className="bg-[#3FAEFF] text-white w-full max-w-[260px] py-[14px] font-bold rounded-xl text-[14px] mdx:text-[16px]"
                        onClick={handleScrollToForm}>
                            Получить услугу
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
