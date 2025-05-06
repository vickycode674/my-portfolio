import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import Image from "../assets/aboutme.jpeg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-[rgba(14,18,46,0.99)] text-white pt-24 md:pt-20"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#00ffff" },
            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: 2,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Left Content */}
      <motion.div
        className="md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl md:text-2xl">Hello, It's me</h3>
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-400">
          Chengalapattu Vivek Sai
        </h1>

        {/* Badge */}
        <span className="inline-block bg-cyan-600 text-white text-sm px-3 py-1 rounded-full shadow-md mt-2">
          💼 Open to Work
        </span>

        <h3 className="text-lg md:text-2xl">
          And I'm a{" "}
          <span className="text-cyan-300 font-semibold">
            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer",
                2000,
                "Cloud  Enthusiast (AWS , GCP)",
                2000,
                "Full Stack Developer (MERN / MEVN)",
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
          Expertise in Mongo DB, Express Js, Vue.js  React-JS.
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
            href="https://drive.google.com/file/d/1q2ZCDD91aQHHOIaAWbBZLatwyHU_6k9x/view?usp=sharing"
            target="_blank"
            className="inline-block px-6 py-2 backdrop-blur-md bg-white/10 border border-cyan-300 hover:bg-white/20 text-white font-medium rounded-lg shadow-md transition"
          >
            CV / Resume
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <a
          href="#about"
          className="mt-8 block text-cyan-400 animate-bounce text-2xl hover:text-cyan-300 transition"
        >
          ↓ Scroll Down
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Image}
          alt="Vivek Sai"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-xl hover:scale-105 transition duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Home;
