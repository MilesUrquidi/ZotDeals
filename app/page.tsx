import Link from 'next/link'
import { getResources } from '@/lib/supabase'
import Dashboard from '@/components/Dashboard'
import { FadeIn } from '@/components/PageTransition'

export default async function Home() {
  const resources = await getResources()

  return (
    <main className="min-h-screen bg-white">

      {/* Centered hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-14">
        <FadeIn delay={0}>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight leading-tight max-w-xl">
            Everything your UCI email unlocks.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-4 text-gray-400 text-base max-w-md leading-relaxed">
            Free tools, software, and discounts for UCI students — all in one place.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            href="/submit"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-[#005461] transition-colors"
          >
            Submit a Perk →
          </Link>
        </FadeIn>
      </section>

      {/* Dashboard container */}
      <FadeIn delay={0.35} className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-[#F4F4F4] rounded-3xl p-6">
          <Dashboard resources={resources} />
        </div>
      </FadeIn>

    </main>
  )
}
