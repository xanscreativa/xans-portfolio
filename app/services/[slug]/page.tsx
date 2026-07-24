import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  // Mengubah "brand-identity" menjadi "Brand Identity"
  const title = slug.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-[#0D0C10] text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">
          Service Detail
        </p>
        <h1 className="text-4xl md:text-5xl font-black capitalize">{title}</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Ini adalah halaman detail untuk layanan <strong className="text-white capitalize">{title}</strong>.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}