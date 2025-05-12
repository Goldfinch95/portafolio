import Image from "next/image";
import { assets } from "../../assets/assets";

const Contact = ({ isDarkMode }) => {
  return (
    <a
      href="mailto:facu_vila@hotmail.com"
      className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
    >
      Contactame{" "}
      <Image
        src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
        alt="Ir a la sección de contacto"
        className="w-3"
        aria-label="Ir a la sección de contacto"
      />
    </a>
  );
};

export default Contact;

