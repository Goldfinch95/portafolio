import Profile from "@/app/components/Profile";
import Intro from "@/app/components/Intro";
import Buttons from "@/app/components/Buttons";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <Profile />
      <Intro />
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Buttons />
      </div>
    </div>
  );
};

export default Header;
