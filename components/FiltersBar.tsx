'use client'

type Filter = { label: string; value: string }

type Props = {
  filters: Filter[]
  active: string
  onChange: (value: string) => void
}

export default function FiltersBar({ filters, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === f.value
              ? 'bg-[#FFD200] text-gray-900'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
