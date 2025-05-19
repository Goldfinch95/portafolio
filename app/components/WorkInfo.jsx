import { motion } from "motion/react";

const WorkInfo = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        ¡Bienvenido a mi portafolio de desarrollo web! Explorá una selección de proyectos que destacan mi experiencia en desarrollo frontend.
      </motion.p>
    </>
  );
};

export default WorkInfo;

