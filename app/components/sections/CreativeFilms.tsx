"use client";

import { useState } from "react";
import FadeUp from "../animation/FadeUp";
import VideoCard from "../work/VideoCard";
import ProjectDetailModal from "../ui/ProjectDetailModal";
import { films, Film } from "@/app/data/film";

function VideoCardWrapper({
  project,
  onOpenModal,
  className = "",
}: {
  project: Film;
  onOpenModal: () => void;
  className?: string;
}) {
  return (
    <div
      onClick={onOpenModal}
      className={`relative cursor-pointer ${className}`}
    >
      <VideoCard project={project} />
    </div>
  );
}

export default function CreativeFilms() {
  const [selectedProject, setSelectedProject] = useState<Film | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Film) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFDFC] py-10 sm:py-20 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none hidden absolute left-1/2 top-32 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-pink-200/30 blur-[100px] sm:block sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="relative mx-auto w-[88%] max-w-7xl sm:w-[92%]">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500 sm:text-xs sm:tracking-[0.45em]">
              SHOWREEL
            </p>

            <h2 className="mt-1.5 text-xl font-black leading-snug text-[#2D2433] sm:mt-3 sm:text-4xl lg:text-5xl">
              Every frame is crafted <br />
              to tell a story.
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-[#6B6570] sm:mt-4 sm:text-base sm:leading-relaxed">
              A curated collection of video editing, motion graphics, AI-assisted
              visuals, and creative storytelling.
            </p>
          </div>
        </FadeUp>

        {/* SELECTED VIDEO WORKS GRID */}
        <div className="mt-8 sm:mt-16 lg:mt-20">
          <div className="mb-4 sm:mb-8 text-center sm:text-left">
            <h3 className="text-base sm:text-2xl font-bold text-[#2D2433]">
              Selected Video Works
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            {films && films.length > 0 ? (
              films.map((film, index) => {
                const isGPIB =
                  film.title?.toLowerCase().includes("gpib") ||
                  film.title?.toLowerCase().includes("immanuel");

                return (
                  <VideoCardWrapper
                    key={film.title || index}
                    project={film}
                    onOpenModal={() => handleOpenModal(film)}
                    className={
                      isGPIB
                        ? "md:col-span-2 xl:col-span-2 xl:col-start-2"
                        : ""
                    }
                  />
                );
              })
            ) : (
              <p className="col-span-full text-center text-xs text-[#6B6570]">
                No projects found.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL DETAIL PROJECT */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}