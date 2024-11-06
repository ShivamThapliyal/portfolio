import React from "react";
import { assets } from "../../../assets/Images/assets";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      className="bg-black  flex flex-col gap-4 items-center   p-5 w-full h-[calc(100vh-105px)] text-white"
      style={{
        backgroundImage: `url(${assets.cool})`,
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgb(0,0,0,0.9)",
      }}
    >
      <div className="flex gap-6 m-5 p-7">
        <motion.a href="" whileHover={{ scale: 1.2, rotate: 360 }}>
          <img
            src={assets.github}
            alt=""
            className="invert brightness-75 w-[50px]"
          />
        </motion.a>

        <motion.a href="" whileHover={{ scale: 1.2, rotate: 360 }}>
          <img src={assets.gmail} alt="" className="w-[50px]" />
        </motion.a>

        <motion.a href="" whileHover={{ scale: 1.2, rotate: 360 }}>
          <img src={assets.linkedin} alt="" className="w-[50px]" />
        </motion.a>

        <motion.a href="" whileHover={{ scale: 1.2, rotate: 360 }}>
          <img src={assets.instagram_icon} alt="" className="w-[50px]" />
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
