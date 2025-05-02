import { infoList } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Info = ({ isDarkMode }) => {
  return (
    <>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
      >
        {infoList.map(({ icon, iconDark, title, description }, index) => (
          <motion.li
            whileInView={{ scale: 1.05 }}
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500  hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <Image
              src={isDarkMode ? iconDark : icon}
              alt={title}
              className="w-7 mt-3"
            />
            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-white/80">
              {description}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Info;
