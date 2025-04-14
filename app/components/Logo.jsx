import Image from "next/image";
import { assets } from "../../assets/assets";

const Logo = () => {
  return (
    <>
      <a href="#top">
        <Image
          src={assets.logo}
          alt="logo"
          className="w-28 cursor-pointer mr-14"
        />
      </a>
    </>
  );
};

export default Logo;
