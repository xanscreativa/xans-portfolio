"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Film } from "@/app/data/film";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Film | null;
}

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
}: ModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto pause video saat modal ditutup
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  // Nonaktifkan scroll halaman saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const isPortrait = project.orientation === "portrait";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Container Modal Pop-up */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[36px] border border-pink-100/40 bg-white p-6 shadow-2xl sm:p-8 md:p-10">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-[#2D2433] font-bold transition-all hover:bg-pink-500 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* SISI KIRI: Video / Media Preview */}
          <div
            className={`overflow-hidden rounded-3xl bg-black ${
              isPortrait
                ? "lg:col-span-5 aspect-[9/16] max-w-[300px] mx-auto w-full"
                : "lg:col-span-12 aspect-video w-full"
            }`}
          >
            {project.preview ? (
              <video
                ref={videoRef}
                src={project.preview}
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* SISI KANAN: Detail Informasii Project */}
          <div
            className={`flex flex-col ${
              isPortrait ? "lg:col-span-7" : "lg:col-span-12 mt-2"
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">
              {project.category}
            </span>
            <h2 className="mt-1 text-3xl font-black text-[#2D2433] sm:text-4xl">
              {project.title}
            </h2>

            {/* Info Metadata (Client & Role) */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-pink-100/80 bg-pink-50/50 p-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Client
                </p>
                <p className="text-sm font-bold text-[#2D2433]">
                  {project.client || "Personal Project"}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Role
                </p>
                <p className="text-sm font-bold text-[#2D2433]">
                  {project.role || "Video Editor"}
                </p>
              </div>
            </div>

            {/* Deskripsi */}
            <p className="mt-4 text-sm leading-relaxed text-[#6B6570]">
              {project.description}
            </p>

            {/* Badges / Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pink-100/60 px-3 py-1 text-[11px] font-semibold text-pink-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* PROSES EDITING & PRODUKSI */}
            {project.process && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#2D2433] mb-4">
                  Creative & Production Process
                </h4>

                <div className="space-y-3 text-xs">
                  {project.process.preProduction && (
                    <div className="rounded-2xl bg-gray-50 p-3.5 border border-gray-100">
                      <span className="font-bold text-pink-500 block mb-1">
                        🎬 1. Pre-Production
                      </span>
                      <p className="text-[#6B6570] leading-relaxed">
                        {project.process.preProduction}
                      </p>
                    </div>
                  )}

                  {project.process.production && (
                    <div className="rounded-2xl bg-gray-50 p-3.5 border border-gray-100">
                      <span className="font-bold text-pink-500 block mb-1">
                        📹 2. Production
                      </span>
                      <p className="text-[#6B6570] leading-relaxed">
                        {project.process.production}
                      </p>
                    </div>
                  )}

                  {project.process.postProduction && (
                    <div className="rounded-2xl bg-gray-50 p-3.5 border border-gray-100">
                      <span className="font-bold text-pink-500 block mb-1">
                        ✂️ 3. Post-Production
                      </span>
                      <p className="text-[#6B6570] leading-relaxed">
                        {project.process.postProduction}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}