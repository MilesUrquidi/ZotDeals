'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Resource } from '@/lib/supabase'
import FiltersBar from './FiltersBar'
import ResourceTable from './ResourceTable'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Productivity', value: 'productivity' },
  { label: 'Design', value: 'design' },
  { label: 'Dev Tools', value: 'dev-tools' },
  { label: 'AI', value: 'ai' },
  { label: 'UCI-Only', value: 'uci-only' },
]

export default function Dashboard({ resources }: { resources: Resource[] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = resources
    .filter(r => activeFilter === 'all' || r.tags.includes(activeFilter))
    .filter(r => !query || r.name.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search perks..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00B7B5] transition-colors"
        />
      </div>

      <FiltersBar filters={FILTERS} active={activeFilter} onChange={setActiveFilter} />
      <ResourceTable resources={filtered} />
    </div>
  )
}
