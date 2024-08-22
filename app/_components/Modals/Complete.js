import Image from "next/image";
import Check from "@/public/svg/tools/EllipseCheck.svg";
import Link from "next/link"

const Complete = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] md:max-w-[345px] mx-auto text-center">
                <div className="flex justify-center mb-4">
                    <Image src={Check} alt="Checkmark" width={50} height={50} 
                    className="w-[70px] mdx:w-[100px] h-auto"/>
                </div>
                <h2 className="text-[20px] mdx:text-[25px] mb-2 text-[#3FAEFF] font-bold">Заявка отправлена!</h2>
                <p className="text-[#737373] mb-4 text-[14px] mdx:text-[16px]">
                    Мы свяжемся с вами в скором времени для подтверждения записи.
                </p>
                <Link href={`/`}>
                    <button
                        className="bg-[#3FAEFF] w-full text-white px-4 py-[18px] rounded-xl font-bold text-[14px] mdx:text-[16px] hover:bg-blue-600"
                    onClick={onClose}
                    >
                        На главную
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Complete;
