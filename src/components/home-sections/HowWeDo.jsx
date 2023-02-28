import { motion } from "framer-motion";

export const HowWeDo = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url(./home/how-we-do/how-we-do-bg.jpg)" }}
    >
      <div className="custom-container py-10">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="my-auto w-full text-center md:w-1/2 md:text-left">
            <motion.h2 
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{delay: .5}}
                className="mb-4 h-max text-4xl">
              Fresh Ingredients,{" "}
              <span className="font-semibold italic text-red-700">
                Superior
              </span>{" "}
              Quality
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, translateX: -50 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ once: true }}
                transition={{delay: .8}}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              corporis eveniet, itaque aut eligendi quas?
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{delay: 1, duration: .6}}
            className="mx-auto w-10/12 border-t-8 border-solid border-red-700 md:w-1/2"
            src="./home/how-we-do/video-how-we-do.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
