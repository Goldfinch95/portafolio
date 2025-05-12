import Image from "next/image"; 
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Buttons = () => {
  return (
    <>
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
         href="mailto:facu_vila@hotmail.com"
        className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 font-Outfit dark:bg-transparent"
        aria-label="Ir a la sección de contacto"
      >
        Contáctame
        <Image
          src={assets.right_arrow_white}
          alt="Flecha indicando contacto"
          className="w-4"
        />
      </motion.a>
      <motion.a
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        href="/sample-resume.pdf"
        download
        className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-Outfit bg-white dark:text-black"
        aria-label="Descargar currículum en PDF"
      >
        Descargar CV
        <Image
          src={assets.download_icon}
          alt="Ícono de descarga"
          className="w-4"
        />
      </motion.a>
    </>
  );
};

export default Buttons;


