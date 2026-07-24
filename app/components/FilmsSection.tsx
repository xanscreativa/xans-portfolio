"use client";

import VideoCard from "./work/VideoCard";

const videoWorks = [
  {
    id: "data-wak-atom",
    category: "TRADING CAMPAIGN",
    title: "Data Wak Atom",
    description: "Short-form educational videos for trading campaigns and social media.",
    tags: ["Video Editing", "Motion Graphics", "TikTok", "Reels"],
    duration: "0:18",
    orientation: "portrait",
    videoSrc: "/videos/previews/data-wak-atom.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLC-2LDqQA69k",
  },
  {
    id: "sinyal-ordal",
    category: "FINANCIAL EDUCATION",
    title: "Sinyal Ordal",
    description: "Creative short-form videos for financial education content.",
    tags: ["Video Editing", "Short Form"],
    duration: "0:26",
    orientation: "portrait",
    videoSrc: "/videos/previews/sinyal-ordal.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLBP7Y-YeCoHM",
  },
  {
    id: "raka-trabas",
    category: "TRADING EDUCATION",
    title: "Raka Trabas",
    description: "Creative video editing for educational trading campaigns.",
    tags: ["Video Editing", "Motion Graphics"],
    duration: "0:31",
    orientation: "portrait",
    videoSrc: "/videos/previews/raka-trabas.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLQXQaMgBqo50",
  },
  {
    id: "gte",
    category: "GOLD TRADING EDUCATION",
    title: "GTE",
    description: "Educational videos focused on international gold trading.",
    tags: ["Video Editing", "Educational"],
    duration: "0:24",
    orientation: "portrait",
    videoSrc: "/videos/previews/gte.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLa1ey4tTciqI",
  },
  {
    id: "gpib",
    category: "CHURCH MEDIA",
    title: "GPIB Immanuel Pekanbaru",
    description: "Church announcements, Easter campaigns, Christmas events, and ministry videos.",
    tags: ["Church Media", "Video Editing", "AI Video"],
    duration: "0:20",
    orientation: "landscape",
    videoSrc: "/videos/previews/gpib.mp4",
    projectUrl: "/work/creative-films",
    playlistUrl: "https://www.youtube.com/playlist?list=PLExudwMXswLA",
  },
];

export default function FilmsSection() {
  return (
    <section id="films" className="relative bg-[#FFFDFC] py-20 sm:py-28">
      <div className="mx-auto w-[92%] max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-pink-500">
            PORTFOLIO FILMS
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#2D2433] sm:text-4xl">
            Selected Video Works
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoWorks.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}