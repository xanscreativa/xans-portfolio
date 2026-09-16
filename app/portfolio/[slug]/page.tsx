import { notFound } from "next/navigation";
import { portfolioCollections, PortfolioCollection } from "@/app/data/portfolio";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes saat build time (SSG)
export async function generateStaticParams() {
  return portfolioCollections.map((item) => ({
    slug: item.slug,
  }));
}

// Helper untuk mengambil project berikutnya
function getNextPortfolio(currentSlug: string): PortfolioCollection {
  const currentIndex = portfolioCollections.findIndex(
    (item) => item.slug === currentSlug
  );
  const nextIndex = (currentIndex + 1) % portfolioCollections.length;
  return portfolioCollections[nextIndex];
}

import ProjectPageHero from "@/app/components/work/ProjectPageHero";
export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = portfolioCollections.find((item) => item.slug === slug);
  if (!collection) notFound();
  const nextProject = getNextPortfolio(slug);

  return (
    <article className="relative overflow-hidden bg-[#FFFDFC] pb-16 pt-24 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36">
      <ProjectPageHero project={collection} />
      <ProjectDetailContent project={collection} nextProject={nextProject} />
    </article>
  );
}
