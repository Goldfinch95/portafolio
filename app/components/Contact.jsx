import Image from "next/image";
import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <a
      href="#contact"
      className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
    >
      Contact <Image src={assets.arrow_icon} alt="contact" className="w-3" />
    </a>
  );
};

export default Contact;
