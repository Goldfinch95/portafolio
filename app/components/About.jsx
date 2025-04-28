import Info from "@/app/components/Info";
import Tools from "@/app/components/Tools";
import AboutProfile from "@/app/components/AboutProfile";
import AboutInfo from "@/app/components/AboutInfo";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <AboutProfile />
        <div className="flex-1">
          <AboutInfo />
          <Info />
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default About;
