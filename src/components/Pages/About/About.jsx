import React from "react";
import { assets } from "../../../assets/Images/assets";

function About() {
  return (
    <div className="bg-black flex items-center justify-center  p-5 w-full h-[calc(100vh-105px)] text-white ">
      <div className="p-2">
        <img src={assets.shivam} alt="" className="rounded-lg w-[300px]" />
      </div>
      <div className=" flex flex-col items-center w-1/2  ">
        <div className="mr-96 mt-6 pr-10">
          <h2 className="text-2xl font-semibold tracking-widest">ABOUT ME</h2>
        </div>
        <div className="p-6 ml-14 tracking-wider leading-loose text-base ">
          <p className="mb-4">
            Hello! I’m a final-year Computer Science and Engineering student at
            Graphic Era Hill University, Dehradun. I’m passionate about building
            efficient, user-focused applications. Over the years, I’ve worked on
            various projects, from interactive web apps to AI-enhanced
            interfaces, honing my skills in JavaScript, React, Node.js, and
            Tailwind CSS.
          </p>
          <p>
            My experience includes building responsive UIs, implementing complex
            functionalities, and optimizing performance. I strive to create
            seamless digital experiences that not only look great but also
            improve user engagement and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

//  Hello, my name is Gautam Sajwan, currently a final-year B.Tech student at Graphic Era Hill University. My passion lies in leveraging technology and coding to innovate and solve real-world problems.
//  Proficient in languages such as C++, JavaScript, C, and Java, I also have a solid foundation in Python and SQL. With a keen interest in Full Stack Web Development, I have gained extensive experience in frontend and backend technologies/frameworks including React.js, Tailwind CSS, Next.js, Express.js, MongoDB, Typescript and WebSockets.
//  Additionally, I possess strong skills in Data Structures and Algorithms, enabling me to efficiently tackle complex problems. I am deeply committed to continuous learning and growth, always seeking new opportunities to expand my knowledge and expertise.
//  Eager to embark on exciting projects and overcome challenges, I am enthusiastic about collaborating with others to create impactful solutions. Let's connect and build something great together!
