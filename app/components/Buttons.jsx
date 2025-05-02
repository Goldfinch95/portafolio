import Image from "next/image";
import { assets } from "../../assets/assets";

const Buttons = () => {
  return (
    <>
      <a
        href="#contact"
        className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 font-Outfit dark:bg-transparent"
      >
        contact me
        <Image
          src={assets.right_arrow_white}
          alt="go to contact me"
          className="w-4"
        />
      </a>
      <a
        href="/sample-resume.pdf"
        download
        className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-Outfit bg-white dark:text-black"
      >
        my resume
        <Image
          src={assets.download_icon}
          alt="go to contact me"
          className="w-4"
        />
      </a>
    </>
  );
};

export default Buttons;
