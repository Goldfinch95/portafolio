import ServiceList from "@/app/components/ServiceList";
import ServiceInfo from "@/app/components/ServiceInfo";
import { motion } from "motion/react";

const Services = () => {
  return (
   <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  id="services"
  className="w-full px-[12%] py-10 scroll-mt-20"
>
  <motion.h4
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    className="text-center mb-2 text-lg font-Ovo"
  >
    Lo que ofrezco
  </motion.h4>
  <motion.h2
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className="text-center text-5xl font-Ovo"
  >
    Mis Servicios
  </motion.h2>
  <ServiceInfo />
  <ServiceList />
</motion.div>

  );
};

export default Services;
