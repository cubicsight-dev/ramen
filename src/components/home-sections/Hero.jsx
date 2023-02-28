import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(./home/hero/bg.jpg)" }}
    >
      <div className="custom-container flex min-h-screen flex-col-reverse items-center justify-center gap-6 py-10 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <motion.h1 
            initial={{opacity: 0,y: 15}}
            animate={{opacity: 1,y: 0}}
            exit={{opacity: 0,y: 15}}
            transition={{delay: .8,default: { ease: "linear" }}}
            className="mb-8 text-center text-3xl font-semibold sm:text-left md:text-5xl">
            We’re Crazy About <span className="text-red-700">Ramen!</span>
          </motion.h1>
          <motion.p 
          initial={{opacity: 0,y: 15}}
          animate={{opacity: 1,y: 0}}
          exit={{opacity: 0,y: 15}}
          transition={{delay: 1,default: { ease: "linear" }}}
          className="mb-5 text-center text-lg sm:text-left">
            <span className="text-3xl font-semibold">Name</span> is known for
            its slow-cooked approach to ramen, made from broths simmered for 20
            hours in-house.
          </motion.p>
          <motion.a
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: .9}}
            href="#menu"
            className="mx-auto flex w-max rounded-md border-2 border-solid border-red-700 bg-transparent p-2 text-lg transition delay-100  duration-300 ease-in-out hover:bg-red-700 sm:mx-0 sm:block"
          >
            View our menu
          </motion.a>
        </div>
        <motion.img 
            initial={{opacity: 0,scale: .5}}
            animate={{opacity: 1,scale: 1}}
            // animate={{opacity: 1,scale: [1.1, 1, .8, 1]}}
            exit={{opacity: 0,scale: .5}}
            transition={{delay: 1.2, duration: .4}}
            src="./home/hero/ramen.png" alt="" className="w-1/2" />
      </div>
    </section>
  );
};
