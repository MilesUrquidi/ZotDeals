'use client'

import { useState } from 'react'
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

  const filtered = activeFilter === 'all'
    ? resources
    : resources.filter(r => r.tags.includes(activeFilter))

  return (
    <div>
      <FiltersBar filters={FILTERS} active={activeFilter} onChange={setActiveFilter} />
      <ResourceTable resources={filtered} />
    </div>
  )
}
