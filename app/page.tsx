import Link from "next/link";
import Image from "next/image";
import { getResources } from "@/lib/supabase";
import Dashboard from "@/components/Dashboard";
import { FadeIn } from "@/components/PageTransition";

export const revalidate = 0;

export default async function Home() {
  const resources = await getResources();

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "25px 25px",
      }}
    >
      {/* Centered hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 sm:pt-28 pb-12 sm:pb-16">
        <div className="relative w-full max-w-6xl flex flex-col items-center">
          {/* Sticker — top left (gray blue shoes) */}
          <FadeIn delay={0} className="absolute top-0 left-0 rotate-[-10deg] drop-shadow-lg">
            <Image src="/peter-gray.png" alt="" width={90} height={90} />
          </FadeIn>
          {/* Sticker — top right (yellow Peter) */}
          <FadeIn delay={0.1} className="absolute top-20 right-20 rotate-[15deg] drop-shadow-lg">
            <Image src="/peter.png" alt="" width={120} height={65} />
          </FadeIn>
          <FadeIn delay={0}>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Everything your UCI email unlocks.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-gray-500 text-lg max-w-md leading-relaxed">
              Free tools, software, and discounts for UCI students <br />
              all in one place.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Dashboard container */}
      <FadeIn
        delay={0.35}
        className="relative max-w-6xl mx-auto px-3 sm:px-6 pb-20"
      >
        {/* Peter straddling the top border of the card */}
        <div className="absolute -top-30 left-35 z-10 drop-shadow-xl">
          <Image src="/peter-real.png" alt="" width={120} height={120} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-100 bg-[#FAF9F7] p-3 sm:p-8 shadow-2xl shadow-black/25">
          <Dashboard resources={resources} />
        </div>
      </FadeIn>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-3 py-10 text-sm text-gray-400">
        Know a deal we're missing?
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJRSRzrb5tulw2ZhsbVppnDlVEFJI0E_t3iPryPtIpDowtyw/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-[#23c3ea] hover:-translate-y-0.5 transition-all"
        >
          Submit a deal →
        </Link>
      </footer>
    </main>
  );
}
