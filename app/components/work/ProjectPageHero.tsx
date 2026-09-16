import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/app/components/animation/FadeUp";
import type { PortfolioCollection } from "@/app/data/portfolio";

export default function ProjectPageHero({ project }: { project: PortfolioCollection }) {
  return (
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <FadeUp>
        <Link href="/#portfolio" className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6B6570] hover:text-[#E96A98] sm:mb-12">
          <span>←</span><span>Back to Selected Works</span>
        </Link>
      </FadeUp>
      <header className="max-w-4xl">
        <FadeUp><span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#E96A98] sm:text-xs">{project.category}</span></FadeUp>
        <FadeUp delay={0.05}><h1 className="mt-2 text-3xl font-black tracking-tight text-[#2D2433] sm:text-5xl lg:text-6xl">{project.title}</h1></FadeUp>
        <FadeUp delay={0.1}><p className="mt-4 text-base leading-relaxed text-[#6B6570] sm:text-xl">{project.tagline || project.description}</p></FadeUp>
      </header>
      <FadeUp delay={0.15}>
        <div className="relative mt-8 overflow-hidden rounded-[24px] border border-pink-100/80 bg-[#F9F4F2] p-2 shadow-[0_15px_45px_rgba(45,36,51,0.06)] sm:mt-12 sm:rounded-[36px] sm:p-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] sm:aspect-[16/9] sm:rounded-[28px]">
            <Image src={project.cover} alt={project.title} fill priority sizes="(max-width: 768px) 92vw, 1200px" className="object-cover object-center" />
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
