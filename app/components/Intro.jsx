import Image from "next/image";
import { assets } from "../../assets/assets";

const Intro = () => {
  return (
    <>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm William Mark{" "}
        <Image
          src={assets.hand_icon}
          alt="greet"
          className="rounded-full w-6"
        />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        frontend web developer based in London.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
    </>
  );
};

export default Intro;
