"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import type { PortfolioCollection } from "@/app/data/portfolio";
import Lightbox from "./Lightbox";

interface Props {
  project: PortfolioCollection;
}

const fadeRise = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function ProjectDetailGallery({ project }: Props) {
  const allImages = useMemo(
    () => project.items.flatMap((item) => item.images),
    [project]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeBook, setActiveBook] = useState<number | null>(null);

  if (!project.items.length) {
    return null;
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const isMilenial = project.slug === "milenials-batik-ecoo-fashion";
  const lookbooks = project.items.slice(0, 3);
  const supportingDesigns = project.items.slice(3);

  const getGlobalImageIndex = (itemIndex: number) =>
    project.items
      .slice(0, itemIndex)
      .reduce((acc, item) => acc + item.images.length, 0);

  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#2D2433] sm:text-5xl">
            {isMilenial ? "Lookbook & Design Collection" : "Selected Visuals"}
          </h2>

          {isMilenial ? (
            <>
              {/* LOOKBOOK MOCKUP
                  Three 4:5 book covers arranged like a physical editorial mockup.
                  Desktop: hover lifts the book. Mobile: tap lifts, second tap opens it. */}
              <div className="mt-14 sm:mt-20">
                <div className="relative mx-auto flex min-h-[430px] max-w-5xl items-center justify-center px-4 sm:min-h-[560px] sm:px-8">
                  {lookbooks.map((book, index) => {
                    const rotations = [-7, 0, 7];
                    const offsets = ["-ml-8 sm:-ml-16", "-ml-8 sm:-ml-12", "-ml-8 sm:-ml-16"];
                    const isActive = activeBook === index;

                    return (
                      <motion.div
                        key={book.title}
                        initial={{ y: 0, rotate: rotations[index] }}
                        animate={{
                          y: isActive ? -28 : 0,
                          rotate: rotations[index],
                          scale: isActive ? 1.035 : 1,
                          zIndex: isActive ? 30 : index === 1 ? 20 : 10 + index,
                        }}
                        whileHover={{
                          y: -28,
                          scale: 1.035,
                          zIndex: 30,
                          transition: { duration: 0.28, ease: "easeOut" },
                        }}
                        transition={{ duration: 0.32, ease: "easeOut" }}
                        className={`group relative w-[31%] max-w-[280px] min-w-0 shrink-0 origin-bottom overflow-visible rounded-[8px] ${offsets[index]}`}
                        style={{
                          perspective: "1200px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <div
                          className="relative aspect-[4/5] w-full overflow-hidden rounded-[5px] bg-white shadow-[0_24px_35px_rgba(45,36,51,0.18)] ring-1 ring-black/10 transition-shadow duration-300 group-hover:shadow-[0_34px_45px_rgba(45,36,51,0.25)]"
                          style={{ transform: "translateZ(0)" }}
                        >
                          <Image
                            src={book.cover}
                            alt={book.title}
                            fill
                            sizes="(max-width: 640px) 31vw, 280px"
                            className="object-cover"
                          />
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-y-1 right-[-3px] w-[4px] rounded-r-sm bg-gradient-to-r from-black/10 via-white to-black/5"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mx-auto mt-2 max-w-5xl text-center">
                  
                </div>
              </div>

              {/* PACKAGING + PRINT MEDIA */}
              {supportingDesigns.length > 0 && (
                <div className="mt-24 border-t border-pink-100/80 pt-16 sm:mt-32">
                  <div className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
                      Supporting Design
                    </p>
                    <h3 className="mt-3 text-3xl font-black text-[#2D2433] sm:text-4xl">
                      Packaging & Print Media
                    </h3>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2">
                    {supportingDesigns.map((item, localIndex) => {
                      const originalIndex = localIndex + 3;
                      const absoluteIndex = getGlobalImageIndex(originalIndex);

                      return (
                        <motion.button
                          key={item.title}
                          type="button"
                          onClick={() => openLightbox(absoluteIndex)}
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.25 }}
                          className="group relative overflow-hidden rounded-[24px] bg-[#F8F3F5] text-left shadow-[0_18px_45px_rgba(45,36,51,0.07)] outline-none focus-visible:ring-2 focus-visible:ring-[#E96A98] focus-visible:ring-offset-4"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={item.cover}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 92vw, 46vw"
                              className="object-cover transition duration-700 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/45 via-black/0 to-transparent p-6">
                              <div className="text-white">
                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-90">
                                  {item.subtitle}
                                </p>
                                <h4 className="mt-1 text-xl font-bold sm:text-2xl">
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="mt-14 space-y-16">
              {project.items.map((collectionProject, collectionIndex) => {
                const previousImagesCount = project.items
                  .slice(0, collectionIndex)
                  .reduce((acc, item) => acc + item.images.length, 0);

                return (
                  <motion.div
                    key={collectionIndex}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeRise}
                    className="space-y-6"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-500">
                        Project
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-[#2D2433] sm:text-3xl">
                        {collectionProject.title}
                      </h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {collectionProject.images.map((image, imageIndex) => {
                        const absoluteIndex = previousImagesCount + imageIndex;

                        return (
                          <motion.div
                            whileHover={{ y: -4 }}
                            key={`${image}-${imageIndex}`}
                            onClick={() => openLightbox(absoluteIndex)}
                            className="group relative cursor-pointer overflow-hidden rounded-[28px] bg-[#F8F3F5] shadow-[0_20px_50px_rgba(28,22,33,0.06)]"
                          >
                            <Image
                              src={image}
                              alt={`${collectionProject.title}-${imageIndex}`}
                              width={1200}
                              height={1400}
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
                              <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#2D2433] shadow-md backdrop-blur-md">
                                Expand
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Lightbox
        images={allImages}
        title={project.title}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
