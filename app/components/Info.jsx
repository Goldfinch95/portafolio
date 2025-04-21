import { infoList } from "../../assets/assets";
import Image from "next/image";

const Info = () => {
    return (
        <>
         <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500  shadow-black">
                        <Image src={icon} alt={title} className="w-7 mt-3" />
                        <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                        <p className="text-gray-600 text-sm">{description}</p>
                    </li>
                ))}
            </ul>   
        </>
    );
};

export default Info;