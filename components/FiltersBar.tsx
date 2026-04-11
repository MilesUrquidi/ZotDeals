'use client'

type Filter = { label: string; value: string }

type Props = {
  filters: Filter[]
  active: string
  onChange: (value: string) => void
}

export default function FiltersBar({ filters, active, onChange }: Props) {
  return (
    <div className="relative mb-6">
      <div
        role="group"
        aria-label="Filter deals by category"
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
      >
        {filters.map(f => (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            aria-pressed={active === f.value}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === f.value
                ? 'bg-[#23c3ea] text-white'
                : 'bg-[#F4F4F4] text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#FAF9F7] to-transparent" />
    </div>
  )
}
