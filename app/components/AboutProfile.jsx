import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";
const AboutProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-64 sm:w-80 rounded-3xl max-w-none"
    >
      <Image
        src={assets.user_image}
        alt="user"
        className="w-full rounded-3xl"
      />
    </motion.div>
  );
};

export default AboutProfile;
