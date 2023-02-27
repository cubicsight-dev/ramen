import { AnimatePresence, motion } from "framer-motion";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import { poppins } from "./variables/fonts";

export default function layout({ children }) {
  return (
    <>
        <AnimatePresence mode="wait">
            <NavBar key={'navbar'}/>
            
                <motion.main 
                    key={'main'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{delay: .2, duration: .2}}
                    className={`${poppins.variable} bg-black font-poppins`}>
                    {children}
                </motion.main>
            <Footer key={'footer'}/>
        </AnimatePresence>
    </>
  );
}
