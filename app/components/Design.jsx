import Image from "next/image";
import { assets } from "../../assets/assets";
const Design = () => {
  return (
    <button>
      <Image src={assets.moon_icon} alt="change design" className="w-6" />
    </button>
  );
};

export default Design;
