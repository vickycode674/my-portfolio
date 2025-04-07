import React from "react";

const eventsData = [
  {
    title: "IIT PALS Student Leader Award",
    img: "https://i.postimg.cc/VL3cyMRZ/pals-award.jpg",
    date: "March 2024",
    desc: "Honored as the IIT PALS Student Leader of SRM IST for impactful coordination and leadership across 40+ colleges.",
  },
  {
    title: "IIT Madras Workshop",
    img: "https://i.postimg.cc/wMv4czq7/iit-workshop.jpg",
    date: "July 2023",
    desc: "Participated in a transformative 3-day residential workshop at IIT Madras with top student innovators across India.",
  },
  {
    title: "Hackverse 2.0",
    img: "https://i.postimg.cc/26Jnp9tw/hackathon.jpg",
    date: "October 2023",
    desc: "Built an innovative real-time emergency response platform using ML and maps during 36hr national-level hackathon.",
  },
  {
    title: "CHIPSET Project Expo",
    img: "https://i.postimg.cc/FKQpNv8r/expo.jpg",
    date: "February 2024",
    desc: "Showcased Smart City Traffic Solution using AI, V2X & cloud tech at the CHIPSET Intercollege Tech Expo.",
  },
];

const Events = () => {
  return (
    <section id="events" className="px-6 md:px-20 py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00fe19] mb-2">Achievements & Events</h2>
        <p className="text-gray-300 text-lg">
          From hackathons to leadership honors — here are some proud moments of my journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventsData.map((event, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-2xl shadow-md border border-[#00fe19]/30 bg-white/5 backdrop-blur-xl transition-transform transform hover:scale-105"
          >
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-52 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
              <h3 className="text-lg font-bold text-[#49cfef]">{event.title}</h3>
              <p className="text-gray-300 text-xs">{event.date}</p>
              <p className="text-gray-400 text-sm mt-1 line-clamp-3">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
