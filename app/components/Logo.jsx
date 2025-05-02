import Image from "next/image";
import { assets } from "../../assets/assets";

const Logo = ({ isDarkMode }) => {
  return (
    <>
      <a href="#top">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="mr-14 w-28 cursor-pointer"
        />
      </a>
    </>
  );
};

export default Logo;
