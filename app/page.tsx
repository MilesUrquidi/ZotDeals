import Link from "next/link";
import { getResources } from "@/lib/supabase";
import Dashboard from "@/components/Dashboard";
import { FadeIn } from "@/components/PageTransition";

export default async function Home() {
  const resources = await getResources();

  return (
    <main className="min-h-screen bg-white">
      {/* Centered hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 sm:pt-28 pb-12 sm:pb-16">
        <FadeIn delay={0}>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight max-w-2xl">
            Everything your UCI email unlocks.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-gray-400 text-lg max-w-md leading-relaxed">
            Free tools, software, and discounts for UCI students — all in one place.
          </p>
        </FadeIn>
      </section>

      {/* Dashboard container */}
      <FadeIn delay={0.35} className="max-w-6xl mx-auto px-3 sm:px-6 pb-20">
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
