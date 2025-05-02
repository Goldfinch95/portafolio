import Image from "next/image";
import { assets } from "../../assets/assets";
const Design = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button onClick={() => setIsDarkMode((prev) => !prev)}>
      <Image
        src={isDarkMode ? assets.sun_icon : assets.moon_icon}
        alt="change design"
        className="w-6"
      />
    </button>
  );
};

export default Design;
