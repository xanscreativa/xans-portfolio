"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "../animation/FadeUp";
import Button from "../ui/Button";
import VideoCard from "../work/VideoCard";
import ProjectDetailModal from "../ui/ProjectDetailModal";
import { useVideoVisibility } from "@/app/hooks/useVideoVisibility";
import { films, Film } from "@/app/data/film";

// Komponen Pembungkus Featured Video (Atas)
function FeaturedMedia({
  featured,
  onOpenModal,
}: {
  featured: Film;
  onOpenModal: () => void;
}) {
  const { containerRef, videoRef, isVideoLoaded, handleCanPlay } =
    useVideoVisibility({ threshold: 0.45 });

  const isPortrait = featured.orientation === "portrait";

  return (
    <div ref={containerRef} className="relative group">
      <div
        onClick={onOpenModal}
        className={`relative block overflow-hidden rounded-2xl sm:rounded-[36px] bg-[#1E1B22] cursor-pointer ${
          isPortrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        {/* Thumbnail Image Placeholder */}
        {featured.thumbnail && (
          <Image
            src={featured.thumbnail}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className={`object-cover transition-opacity duration-400 ease-out ${
              isVideoLoaded ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        )}

        {/* Video Player Preview */}
        {featured.preview && (
          <video
            ref={videoRef}
            src={featured.preview}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            onCanPlay={handleCanPlay}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-600 ease-out group-hover:scale-[1.04] group-hover:brightness-105 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <button
        onClick={onOpenModal}
        className="absolute right-3 top-3 sm:right-6 sm:top-6 lg:right-10 lg:top-10 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-pink-500 font-bold shadow-lg transition hover:scale-110 active:scale-95 text-xs sm:text-base"
        aria-label="Play Featured Video"
      >
        ▶
      </button>
    </div>
  );
}

// Komponen Pembungkus Grid Card
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
  const featured = films.find((film) => film.featured) ?? films[0];

  // State untuk Pop-Up Modal Detail Project
  const [selectedProject, setSelectedProject] = useState<Film | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Film) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-24 lg:py-32 bg-[#FFFDFC]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-pink-200/30 blur-[100px] sm:blur-[120px]" />

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* HEADER SECTION */}
        <FadeUp>
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-pink-500 font-semibold">
              SHOWREEL
            </p>

            <h2 className="mt-3 sm:mt-5 mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#2D2433] sm:mx-0">
              Every frame is crafted to tell a story.
            </h2>

            <p className="mt-4 sm:mt-6 mx-auto max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-[#6B6570] sm:mx-0">
              A curated collection of video editing, motion graphics, AI-assisted
              visuals, and creative storytelling.
            </p>
          </div>
        </FadeUp>

        {/* FEATURED BANNER ATAS */}
        <FadeUp delay={0.15}>
          <div className="mt-8 sm:mt-12 grid items-center gap-6 sm:gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16">
            <div className="mx-auto w-full max-w-[320px] sm:max-w-[400px]">
              <div className="absolute inset-0 rounded-[40px] sm:rounded-[60px] bg-pink-200 blur-[60px] sm:blur-[80px] opacity-30" />

              <div className="group relative rounded-3xl sm:rounded-[48px] border border-pink-100 bg-white p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,.06)] sm:shadow-[0_40px_90px_rgba(0,0,0,.08)] transition-all duration-600 hover:-translate-y-1.5 hover:shadow-[0_50px_100px_rgba(233,106,152,0.15)]">
                <FeaturedMedia
                  featured={featured}
                  onOpenModal={() => handleOpenModal(featured)}
                />
              </div>
            </div>

            <div>
              <div className="rounded-3xl sm:rounded-[36px] border border-pink-100 bg-white p-5 sm:p-8 lg:p-10 shadow-lg text-center sm:text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-pink-500 font-bold">
                  Featured Project
                </p>

                <h3 className="mt-2.5 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#2D2433]">
                  {featured.title}
                </h3>

                <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-8 text-[#6B6570]">
                  {featured.description}
                </p>

                <div className="mt-5 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 sm:justify-start">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-pink-50 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-pink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 sm:mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
                  <button
                    onClick={() => handleOpenModal(featured)}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-pink-600 active:scale-95"
                  >
                    View Project →
                  </button>
                  {featured.playlist && (
                    <Button href={featured.playlist} variant="secondary">
                      View Playlist →
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* SELECTED VIDEO WORKS GRID */}
        <FadeUp delay={0.3}>
          <div className="mt-14 sm:mt-20 lg:mt-24">
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2D2433]">
                Selected Video Works
              </h3>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
              {films.map((film, index) => {
                // Deteksi apakah item ini adalah GPIB Immanuel Pekanbaru
                const isGPIB =
                  film.title.toLowerCase().includes("gpib") ||
                  film.title.toLowerCase().includes("immanuel");

                return (
                  <VideoCardWrapper
                    key={film.title || index}
                    project={film}
                    onOpenModal={() => handleOpenModal(film)}
                    /* Jika GPIB: Span 2 kolom dan letakkan di tengah pada desktop */
                    className={
                      isGPIB
                        ? "md:col-span-2 xl:col-span-2 xl:col-start-2"
                        : ""
                    }
                  />
                );
              })}
            </div>
          </div>
        </FadeUp>
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