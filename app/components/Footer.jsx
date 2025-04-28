import Image from "next/image";
import { assets } from "@/assets/assets";
import Links from "@/app/components/Links";
import Email from "@/app/components/Email";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Email />
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Goldfinch. All Rights reserved.</p>
        <Links />
      </div>
    </div>
  );
};

export default Footer;
