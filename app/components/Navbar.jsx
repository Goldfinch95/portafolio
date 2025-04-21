import Logo from "@/app/components/Logo";
import MainList from "@/app/components/Mainlist";
import Design from "@/app/components/Design";
import Background from "@/app/components/Background";
import Contact from "@/app/components/Contact";
import Menu from "@/app/components/Menu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true);
      }
      else{
        setIsScroll(false);
      }
    })
  })
  return (
    <>
      <Background />
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <Logo />
        <MainList isScroll={isScroll} />

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
