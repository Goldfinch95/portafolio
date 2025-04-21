import { toolsData } from "../../assets/assets";
import Image from "next/image";

const Tools = () => {
    return (
        <>
         <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index)=>(
                <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7"/>
                </li>
              ))}
            </ul>   
        </>
    );
};

export default Tools;