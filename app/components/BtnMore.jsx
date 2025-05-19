import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const BtnMore = ({ isDarkMode }) => {
  return (
    <>
      {/*<motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-transparent rounded-full py-3 px-10 mx-auto my-20 opacity-0"
      >
        {/* 
        <a
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show more
          <Image
            src={
              isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
            }
            alt="Right arrow"
            className="w-4"
          />
        </a>
        
      </motion.div>*/}
    </>
  );
};

export default BtnMore;

