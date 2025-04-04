import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import Image from "../assets/aboutme.jpeg"; // Make sure the image path is correct

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-[rgba(14,18,46,0.99)] text-white pt-16 md:pt-10"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h3 className="text-xl md:text-2xl">Hello, It's me</h3>
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-400">
          Chengalapattu Vivek Sai
        </h1>
        <h3 className="text-lg md:text-2xl">
          And I'm a{" "}
          <span className="text-cyan-300 font-semibold">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React.js Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h3>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          I am a full stack developer with extensive tech skills. <br />
          Expertise in HTML, CSS, JavaScript, React-JS.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 mt-4">
          <a
            href="mailto:chvivek674@gmail.com"
            target="_blank"
            className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/chengalapattu-vivek-sai/"
            target="_blank"
            className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.hackerrank.com/RA2111028020021"
            target="_blank"
            className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full"
          >
            <FaCode />
          </a>
          <a
            href="https://github.com/vickycode674"
            target="_blank"
            className="text-cyan-300 hover:text-white transition text-xl border-2 border-cyan-400 p-3 rounded-full"
          >
            <FaGithub />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1QVi0kFet6VeJaQGmFpQfxVehrQW7_1F0/view?usp=sharing"
            target="_blank"
            className="inline-block px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-lg shadow-md transition"
          >
            CV / Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={Image}
          alt="Vivek Sai"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-xl hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Home;
