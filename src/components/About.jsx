import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Company1Logo from "../assets/Pando.png";
import Company2Logo from "../assets/traceworks.webp";
import CollegeLogo from "../assets/srm.png";
import School12Logo from "../assets/school1.jpeg";
import School10Logo from "../assets/school2.png";
import Company3Logo from "../assets/pals.jpeg";

const AboutMe = () => {
    return (
        <section id="about" className="bg-[rgba(14,18,46,0.99)] text-white px-6 md:px-16 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>

            <div className="flex flex-col md:flex-row justify-between gap-12">
                {/* Experience Timeline */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-300">Experience</h3>
                    <VerticalTimeline layout={"1-column-left"} lineColor="#22d3ee">
                        {/* Experience 1 */}
                        <VerticalTimelineElement
                            date="Aug 2024 - Jan 2025 · 6 mos"
                            iconStyle={{ background: "#22d3ee", color: "#fff" }}
                            icon={<FaBriefcase />}
                            contentStyle={{
                                background: "rgba(14,18,46,0.9)",
                                color: "#fff",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid #22d3ee" }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-cyan-400 font-bold text-lg">Full Stack Intern</h4>
                                <img
                                    src={Company1Logo}
                                    alt="Pando Logo"
                                    className="w-20 h-8 object-contain"
                                />
                            </div>

                            {/* Styled Info Card */}
                            <div className="bg-[#111827] border border-cyan-700 rounded-lg p-4 shadow-md">
                                <h1 className="text-lg font-bold text-white mb-1">
                                    🏢 Pando Corporation · Internship
                                </h1>
                                <p className="text-gray-400 text-sm mb-3">
                                    📍 Chennai, Tamil Nadu, India · On-site
                                </p>

                                {/* Bullet List */}
                                <ul className="list-disc pl-5 text-sm space-y-2 text-gray-300">
                                    <li>
                                        Worked on <span className="text-cyan-300 font-medium">Vue.js, Node.js, MongoDB, PostgreSQL</span> for supply chain solutions.
                                    </li>
                                    <li>
                                        Integrated <span className="text-cyan-300 font-medium"> APIs</span>, Designed  cron jobs, and optimized queues via <span className="text-cyan-300 font-medium">RabbitMQ</span>.
                                    </li>
                                    <li>
                                        Designed  frontend components with <span className="text-cyan-300 font-medium">AWS S3 integrations</span> for efficient storage.
                                    </li>
                                    <li>
                                        Followed Agile methodology using <span className="text-cyan-300 font-medium">Jenkins</span> for CI/CD and <span className="text-cyan-300 font-medium">Jira</span> for task tracking.
                                    </li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>

                        {/* Experience 2 */}
                        <VerticalTimelineElement
                            date="Apr 2023 - Jun 2024 · 1 yr 3 mos"
                            iconStyle={{ background: "#22d3ee", color: "#fff" }}
                            icon={<FaBriefcase />}
                            contentStyle={{
                                background: "rgba(14,18,46,0.9)",
                                color: "#fff",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid #22d3ee" }}
                        >
                            {/* Header: Role + Logo */}
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-cyan-400 font-bold text-lg">IIT PALS Student Leader</h4>
                                <img src={Company3Logo} alt="PALS Logo" className="w-28 h-10 object-contain" />
                            </div>

                            {/* Styled Info Card */}
                            <div className="bg-[#111827] border border-cyan-700 rounded-lg p-4 shadow-md">
                                <h1 className="text-lg font-bold text-white mb-1">
                                    🏢 PALS · Leadership Internship
                                </h1>
                                <p className="text-gray-400 text-sm mb-3">
                                    📍 SRM IST Ramapuram, Chennai · Hybrid
                                </p>

                                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 leading-relaxed">
                                    <li>Led the PALS community at SRM IST Ramapuram, mentoring <span className="text-cyan-300 font-medium">10,000+ students</span>.</li>
                                    <li>Coordinated workshops, ideathons & tech events with <span className="text-cyan-300 font-medium">IIT Madras</span>.</li>
                                    <li>Enhanced leadership & public speaking through collaboration with <span className="text-cyan-300 font-medium">PALS EC members</span>.</li>
                                    <li>Represented SRM at the IIT PALS Workshop; won for <span className="text-cyan-300 font-medium">project excellence</span>.</li>
                                    <li>Boosted innovation & <span className="text-cyan-300 font-medium">inter-college networking</span> across 40+ colleges.</li>
                                </ul>

                            </div>
                        </VerticalTimelineElement>





                        {/* Experience 3 */}
                        <VerticalTimelineElement
                            date="2023 - 2024"
                            iconStyle={{ background: "#22d3ee", color: "#fff" }}
                            icon={<FaBriefcase />}
                            contentStyle={{
                                background: "rgba(14,18,46,0.9)",
                                color: "#fff",
                                borderRadius: "10px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid #22d3ee" }}
                        >
                            {/* Header: Role + Company Logo */}
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-cyan-400 font-bold text-lg">Frontend Developer Intern</h4>
                                <img src={Company2Logo} alt="TraceWorks Logo" className="w-28 h-10  object-contain size-16" />
                            </div>

                            {/* Styled Info Card */}
                            <div className="bg-[#111827] border border-cyan-700 rounded-lg p-4 shadow-md">
                                <h1 className="text-lg font-bold text-white mb-1">
                                    🏢 TraceWorks Io · Internship
                                </h1>
                                <p className="text-gray-400 text-sm mb-3">
                                    📍 Remote Work · ReactJS Based Projects
                                </p>

                                {/* Bullet List */}
                                <ul className="list-disc pl-5 text-sm space-y-2 text-gray-300">
                                    <li>
                                        Built UIs using <span className="text-cyan-300 font-medium">ReactJS</span> for grocery stores and e-commerce platforms.
                                    </li>
                                    <li>
                                        Implemented <span className="text-cyan-300 font-medium">responsive designs</span> and developed admin dashboards with reusable components.
                                    </li>
                                    <li>
                                        Collaborated with team on GitHub, mastering <span className="text-cyan-300 font-medium">Git</span> version control and clean code practices.
                                    </li>
                                    <li>
                                        Focused on clean UI/UX, component structure, and reusable state logic with <span className="text-cyan-300 font-medium">React Hooks</span>.
                                    </li>
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

                {/* Education Timeline */}
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-violet-400">Education</h3>
                    <VerticalTimeline layout={"1-column-left"} lineColor="#22d3ee">
                        {/* College */}
                        <VerticalTimelineElement
                            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
                            icon={<FaGraduationCap />}
                            contentStyle={{ background: "rgba(14,18,46,0.95)", color: "#fff", borderRadius: "10px" }}
                            contentArrowStyle={{ borderRight: "7px solid #8b5cf6" }}
                        >
                            {/* Header: College + Logo + CGPA */}
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <h4 className="text-violet-400 font-bold text-lg">SRM Institute of Science and Technology</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={CollegeLogo} alt="SRM Logo" className="w-28 h-10 object-contain rounded-full" />
                                    <span className="text-gray-300 text-sm font-semibold">CGPA: <span className="text-violet-300">9.56</span></span>
                                </div>
                            </div>

                            {/* Location */}
                            <p className="text-gray-400 text-sm mb-3 text-right">Chennai, India</p>

                            {/* Description */}
                            <div className="bg-[#1f2348] border border-violet-800 rounded-lg p-4 shadow-md text-sm text-gray-300">
                                <h1 className="text-lg font-bold text-white mb-1">
                                    BTECH (2021-2025)
                                </h1>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="text-violet-300 font-medium"> Computer Science and Engineering</span> specialization of <span className="text-violet-300 font-medium">Cloud Computing</span>.
                                    </li>
                                    <li>
                                        Studied CS subjects <span className="text-violet-300 font-medium"> Operating Systems, Computer Networks</span>, and <span className="text-violet-300 font-medium">DBMS</span>.
                                    </li>
                                    <li>
                                        Gained exposure to advanced areas including <span className="text-violet-300 font-medium">DevOps, Cloud Architecture</span>
                                    </li>
                                </ul>
                            </div>

                        </VerticalTimelineElement>


                        {/* 12th */}
                        <VerticalTimelineElement
                            date="2019 - 2021"
                            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
                            icon={<FaGraduationCap />}
                            contentStyle={{ background: "rgba(14,18,46,0.95)", color: "#fff", borderRadius: "10px" }}
                            contentArrowStyle={{ borderRight: "7px solid #8b5cf6" }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <h4 className="text-violet-400 font-bold text-lg">Sri Chaitanya Junior college</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={School12Logo} alt="SRM Logo" className="w-28 h-12 object-contain rounded-full" />
                                    <span className="text-gray-300 text-sm font-semibold">PERC: <span className="text-violet-300">92%</span></span>
                                </div>
                            </div>

                            {/* Location */}
                            <p className="text-gray-400 text-sm mb-3 text-right">Banglore, India</p>

                            {/* Description */}
                            <div className="bg-[#1f2348] border border-violet-800 rounded-lg p-4 shadow-md text-sm text-gray-300">
                                <h1 className="text-lg font-bold text-white mb-1">
                                    12th CBSE (SCIENCE STREAM)
                                </h1>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="text-violet-300 font-medium">Ultimate Jee Mains and Advanced</span> Training For Other Entrance <span className="text-violet-300 font-medium">Exams</span>.
                                    </li>
                                    <li>
                                        With combination  subjects <span className="text-violet-300 font-medium"> Advanced Mathematics , Chemistry </span>, and <span className="text-violet-300 font-medium">Physics</span>.
                                    </li>
                                    <li>
                                        Gained exposure to Competetive Exams  <span className="text-violet-300 font-medium">Learned balanced Appraoch to work</span>
                                    </li>
                                    <li>
                                        Gained exposure to Competetive Exams  <span className="text-violet-300 font-medium">Learned balanced Appraoch to work</span>
                                    </li>
                                    <li>
                                        Gained exposure to Competetive Exams  <span className="text-violet-300 font-medium">Learned balanced Appraoch to work</span>
                                    </li>
                                    <li>
                                        Gained exposure to Competetive Exams  <span className="text-violet-300 font-medium">Learned balanced Appraoch to work</span>
                                    </li>
                                    <li>
                                        Gained exposure to Competetive Exams  <span className="text-violet-300 font-medium">Learned balanced Appraoch to work</span>
                                    </li>
                                    <li>
                                        Gained exposure to Competetive Exams  <span className="text-violet-300 font-medium">Learned balanced Appraoch to work</span>
                                    </li>
                                </ul>
                            </div>

                        </VerticalTimelineElement>
                        {/* 10th */}
                        <VerticalTimelineElement
                            date="2013 - 2019"
                            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
                            icon={<FaGraduationCap />}
                            contentStyle={{ background: "rgba(14,18,46,0.95)", color: "#fff", borderRadius: "10px" }}
                            contentArrowStyle={{ borderRight: "7px solid #8b5cf6" }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <h4 className="text-violet-400 font-bold text-lg">AMRITA VIDYALAYAM</h4>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={School10Logo} alt="SRM Logo" className="w-28 h-10 object-contain rounded-full" />
                                    <span className="text-gray-300 text-sm font-semibold">PERC: <span className="text-violet-300">92%</span></span>
                                </div>
                            </div>

                            {/* Location */}
                            <p className="text-gray-400 text-sm mb-3 text-right">Ernakulam, India</p>

                            {/* Description */}
                            <div className="bg-[#1f2348] border border-violet-800 rounded-lg p-4 shadow-md text-sm text-gray-300">
                                <h1 className="text-lg font-bold text-white mb-1">
                                    10th CBSE – Amrita Vidyalayam
                                </h1>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        Received a <span className="text-violet-300 font-medium">value-based education</span> rooted in Indian traditions and modern learning.
                                    </li>
                                    <li>
                                        Actively participated in <span className="text-violet-300 font-medium">sports, cultural events</span>, and interschool competitions.
                                    </li>
                                    <li>
                                        Developed strong discipline, focus, and teamwork through both academics and co-curricular activities.
                                    </li>
                                </ul>
                            </div>


                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
