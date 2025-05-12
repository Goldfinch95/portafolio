import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Intro = () => {
  return (
    <>
      <motion.h3
  initial={{ y: -20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
>
  ¡Hola! Soy Facundo Vila{" "}
  <Image
    src={assets.hand_icon}
    alt="saludo"
    className="rounded-full w-6"
  />
</motion.h3>
<motion.h1
  initial={{ y: -30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
>
  Desarrollador web frontend.
</motion.h1>
<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="max-w-2xl mx-auto font-Ovo"
>
  Con base en Buenos Aires, Argentina, tengo 3 años de experiencia creando interfaces modernas y funcionales.
</motion.p>

    </>
  );
};

export default Intro;
