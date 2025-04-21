import Image from "next/image";
import { assets } from "../../assets/assets";
const AboutProfile = () => {
    return (
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
    );
};

export default AboutProfile;