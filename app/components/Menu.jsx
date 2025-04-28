"use client";
import Image from "next/image";
import { useRef } from "react";
import { assets } from "../../assets/assets";

const Menu = () => {
  
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      {/*--- boton --- */}
      <button className="block md:hidden ml-3" aria-label="Open menu" onClick={openMenu}>
        <Image src={assets.menu_black} alt="menu" className="w-6" />
      </button>
      {/*--- menu --- */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-48 z-50 h-screen bg-rose-50 transition duration-500"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={assets.close_black}
            alt="close"
            className="w-5 cursor-pointer"
          />
        </div>

        <li>
          <a className="font-Ovo" href="#top" onClick={closeMenu} aria-label="Go to Home section">
            Home
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#about" onClick={closeMenu} aria-label="Go to About Me section">
            About Me
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#services" onClick={closeMenu} aria-label="Go to Services section">
            Services
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#work" onClick={closeMenu} aria-label="Go to My Work section">
            My Work
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#contact" onClick={closeMenu} aria-label="Go to Contact Me section">
            Contact Me
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
