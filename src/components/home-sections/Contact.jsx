import { GoLocation } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="bg-black">
      <div className="custom-container py-10">
        <div className="flex flex-col-reverse items-center gap-5 md:flex-row md:gap-0">
          <div className="w-full md:w-1/2">
            <motion.h1 
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{delay: .6,duration: .3}}
                className="mb-6 text-center text-4xl md:text-left">
              <span className="font-bold text-red-700">Hurry!</span>, visit us
              now
            </motion.h1>
            <ul className="my-auto">
              <motion.li 
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{delay: .8,duration: .3}}
                className="mb-4 flex gap-3">
                <GoLocation className="text-2xl" />
                <p className="w-3/4">
                  Corniche Rd Radisson Blu Hotel & Resort, Abu Dhabi, UAE
                </p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{delay: 1.1,duration: .3}}
                className="mb-4 flex items-center gap-3">
                <FaRegClock className="text-2xl" />
                <div>
                  <p>Monday - Friday 11am to 11:30pm</p>
                  <p>Saturday - Sunday 12am to 12:30pm</p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                transition={{delay: 1.4,duration: .3}}
                className="mb-4 flex gap-3">
                <BsTelephone className="text-2xl" />
                <p> 000 000 0000</p>
              </motion.li>
              <li className="mt-10 flex gap-5">
                <motion.a 
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{delay: 1.6,duration: .3}}
                    href="https://www.facebook.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/facebook.png"
                    alt="https://www.facebook.com"
                  />
                </motion.a>
                <motion.a 
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{delay: 1.8,duration: .3}}
                    href="https://www.instagram.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/instagram.png"
                    alt="https://www.instagram.com"
                  />
                </motion.a>
                <motion.a 
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{delay: 2,duration: .3}}
                    href="https://www.twitter.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/twitter.png"
                    alt="https://www.twitter.com"
                  />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    transition={{delay: 2.2,duration: .3}} 
                    href="https://www.youtube.com" target="_blank">
                  <img
                    className="w-8"
                    src="./social-media-icons/youtube.png"
                    alt="https://www.youtube.com"
                  />
                </motion.a>
              </li>
            </ul>
          </div>
          <div className="w-9/12 md:w-1/2">
            <motion.img
                initial={{ opacity: 0, translateY: -50 }}
                whileInView={{ opacity: 1, translateY: [0, 20, -30 , 0] }}
                viewport={{ once: true }}
                transition={{delay: 2.4,duration: .3}}
              className="mx-auto w-3/4"
              src="./home/contact/contact-bg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
