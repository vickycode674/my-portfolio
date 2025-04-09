import React, { useState } from "react";
import codingEvents from "../assets/images/Codingevent1.jpeg";
import pitching from "../assets/images/Pitching.jpeg";
// import chipset_Add from "../assets/Achievements/CHIPSET_ADD.jpg";
import chipsetTeam from "../assets/Achievements/CHIPSET_TEAM.jpg";
import chipsetWebdev from "../assets/Achievements/CHIPSET_WEBDEV.jpg";
import iitM from "../assets/Achievements/IIT_PALS_M.jpg";
import devfest from "../assets/Achievements/GDEVFEST2K23.jpg";
import MUN1 from "../assets/Achievements/MUN_LIVE.jpg";
// import PalsFinal from "../assets/Achievements/PALS_FINAL.jpg";
import PalsTeam from "../assets/Achievements/PALS_LOYOLA_EVENT.jpg";
import seminar1 from "../assets/Achievements/SEMINAR_OOPS.jpg";
import seminar2 from "../assets/Achievements/SEMINAR-GRAPHS.jpg";
import SRMVMUN from "../assets/Achievements/SRMVMUN.jpg";
// import SSN_MUN from "../assets/Achievements/SSN_MUN.jpg";
import VIT_MUN from "../assets/Achievements/VIT_MUN.jpg";
import MONGODB from "../assets/images/Mongo db.jpg";

const eventsData = [
  {
    title: "SRM MUN Participation",
    img: SRMVMUN,
    date: "Sept 2023",
    desc: "Represented SRM IST in MUN debate forum.As Member of Bangladesh",
  },
  {
    title: "IIT PALS Student Leader Award",
    img: iitM,
    date: "March 2024",
    desc: "Recognized for leadership across 40+ colleges under IIT PALS.",
  },
  {
    title: "IIT Madras Pitching for Workshop",
    img: pitching,
    date: "July 2023",
    desc: "Pitching Regarding College Events around 50+ classes to around 700+ students",
  },
  {
    title: "Coding Quiz @SRM IST ",
    img: codingEvents,
    date: "October 2023",
    desc: "Particapated In Advanced Tehcnical Quiz",
  },
  {
    title: "PALS SRM Core Team",
    img: PalsTeam,
    date: "March 2024",
    desc: "Organized PALS Loyola Meet as core team representative.",
  },
  // {
  //   title: "PALS Grand Finale",
  //   img: PalsFinal,
  //   date: "March 2024",
  //   desc: "Part of final presentation for PALS Showcase Event.",
  // },
  {
    title: "CHIPSET Team Presentation",
    img: chipsetTeam,
    date: "Feb 2024",
    desc: "Led team presentation at CHIPSET Innovation Challenge.",
  },
  {
    title: "CHIPSET Web Dev Display",
    img: chipsetWebdev,
    date: "Feb 2024",
    desc: "Built website for Smart Traffic solution at CHIPSET.",
  },
  {
    title: "MongoDB Atlas Certification",
    img: MONGODB,
    date: "Jan 2024",
    desc: "Completed MongoDB Atlas cloud database certification.",
  },
  {
    title: "Google DevFest 2K23",
    img: devfest,
    date: "Nov 2023",
    desc: "Participated in DevFest for developer upskilling.",
  },
  {
    title: "VIT MUN Recognition",
    img: VIT_MUN,
    date: "Aug 2023",
    desc: "Received special mention at VIT MUN event.",
  },
  // {
  //   title: "SSN MUN Participation",
  //   img: SSN_MUN,
  //   date: "Aug 2023",
  //   desc: "Participated in national-level SSN MUN conference.",
  // },
  {
    title: "Seminar: Graph Theory",
    img: seminar2,
    date: "Jan 2024",
    desc: "Delivered seminar on Graph Algorithms and Applications.",
  },
  {
    title: "Seminar: OOPS Concepts",
    img: seminar1,
    date: "Jan 2024",
    desc: "Presented on core Object-Oriented Programming concepts.",
  },
  {
    title: "Live MUN Event",
    img: MUN1,
    date: "July 2023",
    desc: "Took part in Live Model UN conference as delegate.",
  },
];

const Events = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = showAll ? eventsData : eventsData.slice(0, 4);

  return (
    <section
      id="events"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-20 px-6 md:px-20 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00fe19] mb-2">Achievements & Events</h2>
        <p className="text-gray-300 text-lg">
          From hackathons to leadership honors — here are some proud moments of my journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {visibleEvents.map((event, idx) => (
          <div
            key={idx}
            className="bg-[#1a2a41] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#49cfef]">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.date}</p>
              <p className="text-sm text-gray-300 mt-2">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#00fe19] text-black font-semibold py-2 px-6 rounded hover:bg-[#00c713] transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default Events;
