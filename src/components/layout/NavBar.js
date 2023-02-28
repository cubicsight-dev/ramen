import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion"

const NavBar = () => {
  const [atTop, setAtTop] = useState(true);
  const [isOpenNav, setisOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpenNav ? "hidden" : "unset";
  }, [isOpenNav]);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;

    setAtTop(scrollY <= 100 ? true : false);
  }, []);

  const onToggleNav = () => {
    console.log();

    if (window.innerWidth < 640) {
      setisOpenNav((p) => !p);
    }
  };

  return (
    <motion.header
        initial={{opacity: 0,y: -100}}
        animate={{opacity: 1,y: 0}}
        exit={{opacity: 0,y: 0}}
        transition={{delay: 1.2 }}
      className={`
            fixed top-0 left-0 z-10 w-full py-4 transition delay-100 duration-300 ease-in-out
            ${
              !atTop
                ? "border-b-4 border-b-red-700 bg-black/90 shadow-md"
                : "border-b-0 border-b-transparent bg-transparent"
            }
            `}
    >
      <div
        className="custom-container flex justify-between"
        onClick={onToggleNav}
      >
        <a href="#hero" className="z-30">
          Your Logo
        </a>
        <div
          id="mobile_menu_button"
          className="s visible z-20 w-[33px] border-2 border-red-700 p-1 sm:hidden"
        >
          <div
            className={`h-[3px] w-full bg-red-700 transition delay-300 duration-300 ease-in-out ${
              isOpenNav ? "translate-y-[7px] rotate-[42deg]" : ""
            }`}
          ></div>
          <div
            className={`my-1 h-[3px] w-full bg-red-700 transition delay-300 duration-300 ease-in-out ${
              isOpenNav ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`h-[3px] w-full bg-red-700 transition delay-300 duration-300 ease-in-out ${
              isOpenNav
                ? "-translate-y-[7px] -rotate-[42deg]"
                : "translate-y-0 rotate-0"
            }`}
          ></div>
        </div>
        <nav
          className={`fixed z-10 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-black/95 ${
            !isOpenNav ? "translate-x-full" : ""
          } right-0 top-0 transition delay-100 duration-300 ease-in-out sm:static sm:h-full sm:w-auto sm:translate-x-0 sm:flex-row sm:items-end sm:justify-end sm:bg-transparent`}
        >
          <a
            className={`w-full border-b-2 border-transparent text-center text-2xl font-semibold transition delay-100 duration-200 ease-in-out sm:w-auto sm:text-sm ${
              !atTop ? "hover:border-white" : "hover:border-red-700"
            }`}
            href="#about"
          >
            About Us
          </a>
          <a
            className={`w-full border-b-2 border-transparent text-center text-2xl font-semibold transition delay-100 duration-200 ease-in-out sm:w-auto sm:text-sm ${
              !atTop ? "hover:border-white" : "hover:border-red-700"
            }`}
            href="#menu"
          >
            Menu
          </a>
          <a
            className={`w-full border-b-2 border-transparent text-center text-2xl font-semibold transition delay-100 duration-200 ease-in-out sm:w-auto sm:text-sm ${
              !atTop ? "hover:border-white" : "hover:border-red-700"
            }`}
            href="#contact"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default NavBar;
