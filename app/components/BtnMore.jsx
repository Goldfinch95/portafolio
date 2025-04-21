import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const BtnMore = () => {
  return (
    <>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </a>
    </>
  );
};

export default BtnMore;
