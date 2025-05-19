import { motion } from "motion/react";

const ServiceInfo = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
       Soy desarrollador frontend de Buenos Aires, Argentina, con más de 3 años
        de experiencia práctica en proyectos reales, aportando valor y calidad
        a cada desarrollo.
      </motion.p>
    </>
  );
};

export default ServiceInfo;
