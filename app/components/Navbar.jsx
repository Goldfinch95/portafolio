import Logo from "@/app/components/Logo";
import MainList from "@/app/components/Mainlist";
import Design from "@/app/components/Design";
import Background from "@/app/components/Background";
import Contact from "@/app/components/Contact";
import Menu from "@/app/components/Menu";

const Navbar = () => {
  return (
    <>
      <Background />
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Logo />
        <MainList />

        <div className="flex items-center gap-4">
          <Design />
          <Contact />
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
