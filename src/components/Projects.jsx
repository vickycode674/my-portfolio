import React from "react";
import ProjectCard from "./ProjectCard";

import sampleImage from "../assets/projects/solarPanel.png";
import aiInterview from "../assets/projects/ai-interview.png";
import travelAdvisor from "../assets/projects/travel-advisor.png";

const projects = [
  {
    title: "Solar Panel Defect Detection Using Automated Machine Learning",
    image: sampleImage,
    github: "https://solar-panel-detection-ml-aws.vercel.app/",
    demo: "https://solar-panel-detection-ml-aws.vercel.app/",
    description: "AI-powered traffic congestion system using ML + V2X.",
    tech: ["React", "Node.js", "Firebase", "Python"]
  },
  {
    title: "AI-Powered Interview For Job Seekers Using Gemini2.0",
    image: aiInterview,
    github: "https://github.com/vickycode674/ai_interview_full_stack/",
    demo: "https://ai-interview-full-stack.vercel.app/",
    description: "Blockchain-based voting platform on Ethereum.",
    tech: ["Solidity", "Web3", "React"]
  },
  {
    title: "Travel Planner (React Js)",
    image: travelAdvisor,
    github: "https://github.com/vickycode674/Travel_Assistant",
    demo: "https://traveladvsior-vicky.netlify.app/",
    description: "Live weather updates with Twilio SMS alerts.",
    tech: ["Node.js", "Twilio", "OpenWeather API"]
  },
  {
    title: "NIKE WEBSITE (React Js)",
    image: travelAdvisor,
    github: "https://github.com/vickycode674/Travel_Assistant",
    demo: "https://traveladvsior-vicky.netlify.app/",
    description: "Live weather updates with Twilio SMS alerts.",
    tech: ["Node.js", "Twilio", "OpenWeather API"]
  },
  {
    title: "Welcome to the world of Javascript (React Js)",
    image: travelAdvisor,
    github: "https://github.com/vickycode674/Travel_Assistant",
    demo: "https://traveladvsior-vicky.netlify.app/",
    description: "Live weather updates with Twilio SMS alerts.",
    tech: ["Node.js", "Twilio", "OpenWeather API"]
  },
  {
    title: "YouTube Clone (React Js)",
    image: travelAdvisor,
    github: "https://github.com/vickycode674/Travel_Assistant",
    demo: "https://traveladvsior-vicky.netlify.app/",
    description: "Live weather updates with Twilio SMS alerts.",
    tech: ["Node.js", "Twilio", "OpenWeather API"]
  },
  // Add more as needed
];

const Projects = () => {
  return (
    <section className="bg-[#0e122e] py-20 px-4 md:px-20 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-cyan-400 mb-14 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div className="w-full h-full" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
