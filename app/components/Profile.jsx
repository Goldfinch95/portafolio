import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Profile = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <Image
        src={assets.profile_img}
        alt="profile"
        className="rounded-full w-32"
      />
    </motion.div>
  );
};

export default Profile;
