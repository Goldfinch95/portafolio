import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";

const ServiceList = () => {
  return (
    <div className="grid grid-cols-auto-fit gap-6 my-10">
      {serviceData.map(({ icon, title, description, link }, index) => (
        <div
          key={index}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <Image src={icon} alt="icon" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            {description}
          </p>
          <a href={link} className="flex items-center gap-2 text-sm mt-5">
            Read more{" "}
            <Image src={assets.right_arrow} alt="arrow" className="w-4" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
