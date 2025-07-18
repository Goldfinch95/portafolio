import { assets, workData } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const WorkList = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="grid grid-cols-auto-fit my-10 gap-5 dark:text-black"
    >
      {workData.map((project, index) => (
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          key={index}
          href="https://lbconsultoriainformatica.com.ar/inicio"
          className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          style={{ backgroundImage: `url(${project.bgImage})`, }}
        >
          
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
          
            <div>
              <h2 className="font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-yellow-300 transition">
              <Image src={assets.send_icon} alt="send icon" className="w-5" />
            </div>
            
          </div>
          
        </motion.a>
      ))}
    </motion.div>
  );
};

export default WorkList;
