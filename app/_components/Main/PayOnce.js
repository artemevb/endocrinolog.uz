"use client"

export default function Skills() {

    const handleScrollToForm = () => {
        const formSection = document.getElementById("form");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full mx-auto px-4 mt-[100px] mdx:mt-[150px] bg-[#F1F4F8] ">
            <div className=" max-w-[1440px] mx-auto py-[60px] mdx:py-[80px] xl:py-[100px] ">
                <div className="max-w-[1054px]">
                    <p className="text-[#737373] text-[14px] mdx:text-[20px] lh font-semibold">Полный контроль вашего здоровья</p>
                    <h2 className="text-[#3FAEFF] mt-[3px] text-[30px] mdx:text-[35px] lh mdl:text-[40px] slg:text-[45px] xl:text-[50px] font-bold">Консультация врача включает в себя мониторинг пациента в течении месяца</h2>
                    <button className="rounded-xl bg-[#3FAEFF] text-[#fff] px-[36px] py-[16px] text-[14px] mdx:text-[16px] text-base mdx:px-[25px] mt-[40px] font-bold"
                        onClick={handleScrollToForm}>
                        <p>Записаться на прием</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
