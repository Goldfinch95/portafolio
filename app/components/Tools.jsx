import { toolsData } from "../../assets/assets";
import Image from "next/image";
import { motion, scale } from "motion/react";

const Tools = () => {
  return (
    <>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex items-center gap-3 sm:gap-5"
      >
        {toolsData.map((tool, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            key={index}
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
          >
            <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Tools;
