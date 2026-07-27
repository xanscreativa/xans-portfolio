import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioCollections } from "@/app/data/portfolio";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Cari data berdasarkan slug
  const collection = portfolioCollections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FFFDFC] py-28 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Tombol Kembali */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-500 hover:text-pink-600 mb-8"
        >
          ← Back to Portfolio
        </Link>

        {/* Header Project */}
        <span className="text-xs font-bold uppercase tracking-[0.35em] text-pink-500 block">
          {collection.category}
        </span>
        <h1 className="mt-2 text-4xl font-black text-[#2D2433] sm:text-5xl">
          {collection.title}
        </h1>
        <p className="mt-4 text-lg text-[#6B6570] max-w-2xl leading-relaxed">
          {collection.overview}
        </p>

        {/* Main Cover Image */}
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-pink-100 bg-pink-50 shadow-md">
          <Image
            src={collection.cover}
            alt={collection.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
          />
        </div>

        {/* Project Items / Showcase */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-[#2D2433] mb-8">
            Project Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collection.items.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-pink-100 bg-white p-4 shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#2D2433]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6570] mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}