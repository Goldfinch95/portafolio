import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Email = ({ isDarkMode }) => {
  return (
    <>
      <Image
        src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
        alt="logo"
        className="w-6"
      />
      facu_vila@hotmail.com
    </>
  );
};

export default Email;
