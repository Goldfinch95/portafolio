import Image from "next/image";
import { assets } from "../../assets/assets";

const Profile = () => {
  return (
    <div>
      <Image
        src={assets.profile_img}
        alt="profile"
        className="rounded-full w-32"
      />
    </div>
  );
};

export default Profile;
