import React from "react";
import {
    SiMongodb, SiExpress, SiReact, SiNodedotjs, SiVuedotjs,
    SiJavascript, SiPython, SiCplusplus, SiPhp, SiTypescript,
    SiPostman, SiJenkins, SiFirebase, SiRedis, SiMysql, SiTailwindcss
} from "react-icons/si";

const CircleSkills = ({ title, skills, color = "cyan", radius = 180 }) => {
    const borderColor = {
        cyan: "border-cyan-400",
        violet: "border-violet-400",
        yellow: "border-yellow-400"
    }[color];

    return (
        <div className="relative min-w-[320px] md:min-w-[380px] lg:min-w-[440px] h-[420px] md:h-[460px] lg:h-[500px] flex items-center justify-center">
            {/* Center Circle */}
            <div className={`absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-[#1f2348] border-4 ${borderColor} flex items-center justify-center font-bold text-white text-center text-xs sm:text-sm md:text-base lg:text-lg z-20`}>
            {title}
            </div>

            {/* Circular Skills with dotted line */}
            {skills.map((skill, index) => {
                const radian = (skill.angle * Math.PI) / 180;
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);

                return (
                    <React.Fragment key={index}>
                        {/* Dotted Line */}
                        <svg className="absolute w-full h-full pointer-events-none">
                            <line
                                x1="50%"
                                y1="50%"
                                x2={`calc(50% + ${x}px)`}
                                y2={`calc(50% + ${y}px)`}
                                stroke="#00ffff"
                                strokeWidth="1"
                                strokeDasharray="4 2"
                            />
                        </svg>

                        {/* Icon and Label */}
                        <div
                            className="absolute flex flex-col items-center text-center text-xs md:text-sm text-white"
                            style={{
                                transform: `translate(${x}px, ${y}px)`
                            }}
                        >
<div className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[34px]" style={{ color: skill.color }}>
{skill.icon}
                            </div>
                            <span className="mt-1 text-[10px] sm:text-xs md:text-sm">{skill.label}</span>
                            </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const SkillTree = () => {
    return (
        <section className="bg-[#0e122e] py-16 px-4 md:px-20 text-white overflow-hidden">
            <h2 className="text-3xl font-bold text-cyan-400 mb-16 text-center">Skills</h2>

            {/* Flex: vertical on small, horizontal on medium+ */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-10 lg:gap-20 w-full overflow-x-auto md:overflow-visible">
                {/* MERN Stack */}
                <CircleSkills
                    title="MERN Stack"
                    color="cyan"
                    skills={[
                        { icon: <SiMongodb />, label: "MongoDB", angle: 270, color: "#4DB33D" },
                        { icon: <SiReact />, label: "ReactJS", angle: 342, color: "#61DBFB" },
                        { icon: <SiExpress />, label: "ExpressJS", angle: 54, color: "#888888" },
                        { icon: <SiNodedotjs />, label: "NodeJS", angle: 126, color: "#3C873A" },
                        { icon: <SiVuedotjs />, label: "VueJS", angle: 198, color: "#42B883" },
                    ]}
                    radius={155} // Reduced for mobile visibility
                />

                {/* Programming */}
                <CircleSkills
                    title="Programming"
                    color="violet"
                    skills={[
                        { icon: <SiJavascript />, label: "JavaScript", angle: 270, color: "#F7DF1E" },
                        { icon: <SiPython />, label: "Python", angle: 342, color: "#3776AB" },
                        { icon: <SiCplusplus />, label: "C++", angle: 54, color: "#00599C" },
                        { icon: <SiPhp />, label: "PHP", angle: 126, color: "#8892BF" },
                        { icon: <SiTypescript />, label: "TypeScript", angle: 198, color: "#007ACC" },
                    ]}
                    radius={155} // Reduced for mobile visibility

                />

                {/* Tools */}
                <CircleSkills
                    title="Other Tools"
                    color="yellow"
                    skills={[
                        { icon: <SiPostman />, label: "Postman", angle: 0, color: "#FF6C37" },
                        { icon: <SiJenkins />, label: "Jenkins", angle: 60, color: "#D24939" },
                        { icon: <SiFirebase />, label: "Firebase", angle: 120, color: "#FFCB2B" },
                        { icon: <SiRedis />, label: "Redis", angle: 180, color: "#DC382D" },
                        { icon: <SiMysql />, label: "MySQL", angle: 240, color: "#00758F" },
                        { icon: <SiTailwindcss />, label: "Tailwind", angle: 300, color: "#38BDF8" },
                    ]}
                    radius={155} // Reduced for mobile visibility
                />
            </div>
        </section>
    );
};

export default SkillTree;
