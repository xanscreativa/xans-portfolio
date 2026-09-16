import type { PortfolioCollection } from "@/app/data/portfolio";
import FadeUp from "@/app/components/animation/FadeUp";
import ProjectDetailSection from "./ProjectDetailSection";
import ProjectDetailGallery from "./ProjectDetailGallery";
import ProjectDetailNext from "./ProjectDetailNext";

export default function ProjectDetailContent({project,nextProject}:{project:PortfolioCollection;nextProject:PortfolioCollection}) {
  return <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-8 lg:px-12">
    {project.meta && <FadeUp><div className="border-y border-pink-100/80 py-8 sm:py-10"><div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">{Object.entries(project.meta).map(([key,value])=><div key={key}><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E96A98]">{key}</p><p className="mt-1 text-xs font-bold text-[#2D2433] sm:text-sm">{value}</p></div>)}</div></div></FadeUp>}
    <section className="mt-16 space-y-16 sm:mt-24 sm:space-y-24">
      {project.overview && <FadeUp><div className="grid gap-6 lg:grid-cols-12 lg:gap-12"><div className="lg:col-span-4"><span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E96A98]">01 / OVERVIEW</span><h2 className="mt-1 text-2xl font-black text-[#2D2433]">Project Context</h2></div><p className="text-sm leading-relaxed text-[#6B6570] lg:col-span-8 sm:text-lg">{project.overview}</p></div></FadeUp>}
      {(project.challenge||project.solution) && <FadeUp><div className="grid gap-8 border-t border-pink-100/60 pt-12 lg:grid-cols-12 lg:gap-12"><div className="lg:col-span-4"><span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E96A98]">02 / STRATEGY</span><h2 className="mt-1 text-2xl font-black text-[#2D2433]">The Challenge &amp; Approach</h2></div><div className="space-y-8 lg:col-span-8">{project.challenge&&<div><h3 className="font-bold text-[#2D2433]">The Core Challenge</h3><p className="mt-2 text-sm leading-relaxed text-[#6B6570]">{project.challenge}</p></div>}{project.solution&&<div className="rounded-2xl border border-pink-100/80 bg-pink-50/50 p-6 sm:p-8"><h3 className="font-bold text-[#2D2433]">The Visual Solution</h3><p className="mt-2 text-sm leading-relaxed text-[#6B6570]">{project.solution}</p></div>}</div></div></FadeUp>}
    </section>
    <ProjectDetailGallery project={project}/>
    <ProjectDetailNext nextProject={nextProject}/>
  </div>;
}
