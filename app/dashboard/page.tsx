import { getResources } from '@/lib/supabase'
import Dashboard from '@/components/Dashboard'

export default async function DashboardPage() {
  const resources = await getResources()

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">UCI Free Stuff</h1>
          <p className="mt-2 text-gray-500">
            Everything your <span className="font-medium text-gray-700">uci.edu</span> email unlocks — free tools, software, discounts, and more.
          </p>
        </div>
        <Dashboard resources={resources} />
      </div>
    </main>
  )
}
