import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const ServiceList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="grid grid-cols-auto-fit gap-6 my-10"
    >
      {serviceData.map(({ icon, title, description }, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={index}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <Image src={icon} alt="icono" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            {description}
          </p>
          <div className="mt-3 h-4"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceList;


