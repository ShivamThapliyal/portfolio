import React, { useState } from "react";
import { project } from "../../../assets/project-images/project.js";
import { assets } from "../../../assets/Images/assets.js";

function Projects() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev === project.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? project.length - 1 : prev - 1));
  };

  const search = project[current];

  return (
    <div className="bg-black w-full h-[calc(100vh-105px)] text-white flex justify-center items-center p-5 gap-10">
      {search && (
        <div className="flex flex-col items-center gap-6  overflow-hidden relative ">
          <div className="">
            <h1 className="text-center text-2xl tracking-widest font-bold mb-4">
              {search.name}
            </h1>
            <div
              className="flex items-stretchgap-3 transition-transform duration-500 ease-in-out relative w-[500px] "
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {project.map((item, key) => (
                <img
                  key={item.id}
                  src={item.Image}
                  alt={item.name}
                  className="w-[500px] rounded-xl  "
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-80">
            <button
              className=" text-gray-400 bg-white bg-opacity-20 p-2 rounded-[10px] pt-1 pb-1 pl-2 pr-2 text-sm  transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={prev}
            >
              Previous
            </button>
            <button
              className="text-gray-400 bg-white bg-opacity-20 p-2 rounded-[10px] pt-1 pb-1 pl-2 pr-2 text-sm  transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {search && (
        <div className="w-[40%] p-4 ml-3 flex flex-col  gap-3">
          <div className="flex justify-around items-center">
            <h1 className="text-[40px] font-[600] underline ">{search.name}</h1>
            <div className="flex items-center gap-3">
              <a href={search.git} target="_blank" rel="noopener noreferrer">
                <img
                  src={assets.github}
                  alt=""
                  className=" invert brightness-90 w-[30px]"
                />
              </a>
              <a href={search.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={assets.domain}
                  alt=""
                  className=" invert brightness-90 w-[30px]"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[20px] tracking-wider leading-loose ">
              {search.Description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
