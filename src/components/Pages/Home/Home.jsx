import React, { useEffect, useState } from "react";
import { assets } from "../../../assets/Images/assets";
import { motion } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 2.5,
    },
  },
};

function Home() {
  const [text, settext] = useState("");
  const [istyping, setistyping] = useState(true);
  const fulltext = "FullStack Developer.";

  useEffect(() => {
    let index = 0;
    const typing = () => {
      if (index < fulltext.length) {
        settext(fulltext.slice(0, index + 1));
        index++;
      } else {
        setistyping(false);
        setTimeout(() => {
          index = 0;
          setistyping(true);
        }, 1000);
      }
    };
    const typingInterval = setInterval(() => {
      if (istyping) {
        typing();
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [istyping]);

  return (
    <div className=" bg-black items-center gap-2 sm:bg-black  sm:flex sm:flex-col sm:items-center  sm:gap-14  sm:p-5 sm:w-full  sm:h-[calc(100vh-105px)] text-white ">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex flex-col items-center gap-5 sm:flex sm:flex-col sm:items-center sm:gap-14"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img
            src={assets.shivam}
            alt=""
            className=" rounded-[50%] w-[100px] shadow-none sm:rounded-[50%] sm:w-[150px] sm:shadow-xl sm:shadow-gray-400/100 "
          />
        </motion.div>
        <div className="flex flex-col text-center sm:flex sm:flex-col ">
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-3xl font-extrabold leading-loose tracking-widest sm:text-6xl sm:font-extrabold sm:leading-loose sm:tracking-widest"
          >
            Hi,
            <span className="font-medium text-transparent bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text animate-gradient-animation">
              Shivam Thapliyal
            </span>
            Here.
          </motion.h1>
          <motion.h2
            variants={fadeInUpAnimation}
            className="text-xl font-extrabold leading-loose tracking-wider sm:text-2xl sm:font-extrabold sm:leading-loose sm:tracking-wider"
          >
            {text}
          </motion.h2>
        </div>

        <motion.div
          variants={fadeInUpAnimation}
          className="flex gap-3 p-3 hover:bg-opacity-40 hover:bg-gray-200 rounded-[50px]"
        >
          <img src={assets.link} alt="" className="w-[30px]" />
          <a href="https://drive.google.com/file/d/1CHIfZKahQ9uEWKxIbmM7M-c0OqcsnlRI/view?usp=drive_link">
            <p className="text-2xl font-extrabold tracking-widest text-transparent text-centers bg-gradient-to-r from-blue-900 to-blue-200 bg-clip-text">
              Resume
            </p>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
