import React from "react";
import { assets } from "../../../assets/Images/assets";
import { motion } from "framer-motion";

function About() {
  return (
    <div className=" bg-black flex flex-col text-white w-full p-2  items-center h-[calc(100vh-105px)] sm:bg-black  sm:flex sm:flex-row sm:items-center sm:justify-center  sm:p-5 sm:w-full sm:h-[calc(100vh-105px)] sm:text-white ">
      <div className="flex flex-col items-center w-full gap-3 p-3 sm:w-1/2 ">
        <div className="mt-3 sm:pr-10 sm:mt-6 sm:mr-80">
          <h2 className="text-2xl font-semibold tracking-widest underline">
            ABOUT ME
          </h2>
        </div>
        <div className=" sm:p-6 sm:text-base sm:leading-loose sm:tracking-wider sm:ml-14">
          <p className="text-sm font-extrabold leading-7 tracking-widest sm:mb-4">
            Hello! I’m a final-year Computer Science and Engineering student at
            Graphic Era Hill University, Dehradun. I’m passionate about building
            efficient, user-focused applications. Over the years, I’ve worked on
            various projects, from interactive web apps to AI-enhanced
            interfaces, honing my skills in JavaScript, React, Node.js, and
            Tailwind CSS.
          </p>
          <p className="hidden text-sm font-extrabold leading-7 tracking-widest sm:block">
            My experience includes building responsive UIs, implementing complex
            functionalities, and optimizing performance. I strive to create
            seamless digital experiences that not only look great but also
            improve user engagement and satisfaction.
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mt-2 sm:p-2"
      >
        <img
          src={assets.shivam}
          alt=""
          className=" w-[150px]  rounded-lg sm:rounded-lg sm:w-[300px]"
        />
      </motion.div>
    </div>
  );
}

export default About;
