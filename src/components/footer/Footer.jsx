import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="bg-black w-full gap-4 text-white  flex flex-col p-4 justify-center items-center">
      <div className="flex justify-center items-center gap-6 pr-6 mt-3">
        <a
          href="https://github.com/ShivamThapliyal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <FaGithub size={30} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/shivamthapliyal20001006/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaLinkedin size={30} />
        </a>{" "}
        <a
          href="https://www.instagram.com/shivam_thapliyal1122/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaInstagram size={30} />
        </a>{" "}
        <a
          href="mailto:shivamthapliyal571@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <SiGmail size={30} />
        </a>
      </div>
      <div className="p-1 text-base text-gray-500">
        <p>Built By - SHIVAM THAPLIYAL</p>
        <p className="text-center">&copy; All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
