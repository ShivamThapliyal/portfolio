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
  const fulltext = "FullStack Developer";

  useEffect(() => {
    let index = 0;
    const typing = () => {
      if (index < fulltext.length) {
        settext(fulltext.slice(0, index + 1));
        index++;
      } else {
        setistyping(false);
        setTimeout(() => {
          //   settext("A");
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
    <div className="bg-black  flex flex-col items-center  gap-14 p-5 w-full h-[calc(100vh-105px)] text-white ">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex flex-col items-center p-5 gap-14"
      >
        <motion.div variants={fadeInUpAnimation}>
          <img
            src={assets.shivam}
            alt=""
            className="rounded-[50%] w-[150px] shadow-xl shadow-gray-400/100 "
          />
        </motion.div>
        <div className="flex flex-col gap-2 text-2xl leading-loose tracking-widest text-center text">
          <motion.h1
            variants={fadeInUpAnimation}
            className="text-6xl font-extrabold text"
          >
            Hi,
            <span className="font-medium text-transparent bg-gradient-to-r from-purple-400 to-red-600 bg-clip-text animate-gradient-animation">
              Shivam Thapliyal
            </span>
            Here.
          </motion.h1>
          <motion.h2 variants={fadeInUpAnimation}>{text}</motion.h2>
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
