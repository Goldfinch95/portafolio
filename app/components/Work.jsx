import WorkList from "@/app/components/WorkList";
import WorkInfo from "@/app/components/WorkInfo";
import BtnMore from "@/app/components/BtnMore";
const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <WorkInfo />
      <WorkList />
      <BtnMore />
    </div>
  );
};

export default Work;
