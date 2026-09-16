export default function Loading() {
  return (
    <main className="min-h-screen bg-[#FFFDFC]">
      <div className="mx-auto w-[92%] max-w-7xl px-5 py-28 sm:px-8 lg:px-12">
        <div className="h-4 w-32 animate-pulse rounded-full bg-pink-100" />
        <div className="mt-6 h-16 max-w-3xl animate-pulse rounded-2xl bg-pink-50 sm:h-24" />
        <div className="mt-8 h-6 max-w-2xl animate-pulse rounded-full bg-pink-50" />
        <div className="mt-16 aspect-[16/9] w-full animate-pulse rounded-[32px] bg-pink-50" />
      </div>
    </main>
  );
}
