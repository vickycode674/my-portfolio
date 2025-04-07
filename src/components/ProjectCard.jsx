import React from "react";

const ProjectCard = ({ title, image, github, demo, description, tech }) => {
  return (
    <div className="bg-[#1f2348] backdrop-blur-md bg-opacity-20 rounded-xl overflow-hidden shadow-xl border border-cyan-400 hover:scale-[1.03] transition duration-300 relative group w-full h-full">
      {/* Image with hover overlay */}
      <div className="relative h-34 md:h-70 lg:h-105">
        <img src={image}  className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0e122e]/90 text-white flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          <p className="text-sm md:text-base mb-2">{description}</p>
          <p className="text-xs md:text-sm text-cyan-400 font-semibold">{tech.join(", ")}</p>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-4  text-cyan-400">{title}</h3>
        <div className="flex justify-center gap-6">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm font-semibold bg-[#0e122e] border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            GitHub
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm font-semibold bg-[#0e122e] border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
