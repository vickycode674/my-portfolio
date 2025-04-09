import React from "react";
import ProjectCard from "./ProjectCard";

import sampleImage from "../assets/projects/solar-panel.png";
import aiInterview from "../assets/projects/ai-interview.png";
import travelAdvisor from "../assets/projects/travel-advisor.png";
import youtubeclone from "../assets/projects/youtube-clone.png";
import nikeWebsite from "../assets/projects/nike-website.png";
import JavascriptMarvel from "../assets/projects/Javascript-mini-proj.png";

const projects = [
  {
    title: "Solar Panel Defect Detection Using Automated Machine Learning",
    image: sampleImage,
    github: "https://solar-panel-detection-ml-aws.vercel.app/",
    demo: "https://solar-panel-detection-ml-aws.vercel.app/",
    description: "Solar panel defect detection using Preimium Aws Tools Easily and Fast.",
    tech: ["React", "AWS Lambda", "Firebase", "AWS SageMaker" , "Api Gateway"]
  },
  {
    title: "AI-Powered Interview For Job Seekers Using Gemini2.0 with Vapi Assistant",
    image: aiInterview,
    github: "https://github.com/vickycode674/ai_interview_full_stack/",
    demo: "https://ai-interview-full-stack.vercel.app/",
    description: "Now Get Ready for your Interview with AI and boost your confidence.",
    tech: ["GeminiApi", "Typescript", "React","Vapi Assistant"]
  },
  {
    title: "Travel Planner (React Js)",
    image: travelAdvisor,
    github: "https://github.com/vickycode674/Travel_Assistant",
    demo: "https://traveladvsior-vicky.netlify.app/",
    description: "Get All Travel Information via maps and Select Restaurants, Hotels, and Activities.",
    tech: ["React", "Rapid Api", "Google Maps API","material UI"]
  },
  {
    title: "Javascript Marvel Cinematic Universe ",
    image: JavascriptMarvel,
    github: "https://github.com/vickycode674/Javascript-miniprojects",
    demo: "https://elegant-marshmallow-027d4b.netlify.app/",
    description: "Enter to Marvel Cinematic Universe of Javascript Mini Projects.",
    tech: ["Javascript", "Api", "Es6", "HTML", "CSS"]
  },

  {
    title: "YouTube Clone (React Js)",
    image: youtubeclone,
    github: "https://github.com/vickycode674/Youtube-clone",
    demo: "https://youtube-india.vercel.app/",
    description: "Enter the Real World of Youtube India with cool features and amazing Ui.",
    tech: ["React", "Rapid Api", "Redux", "Tailwind CSS"]
  },
  {
    title: "NIKE WEBSITE (React Js)",
    image: nikeWebsite,
    github: "https://github.com/vickycode674/Nike_Website",
    demo: "https://nike-website-flax-seven.vercel.app/",
    description: "Dive Into the ultimate Clone of Nike Website where you can buy for your favorite shoes",
    tech: ["Tailwind CSS", "React", "Redux", "React Router", "Firebase"]
  },
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
