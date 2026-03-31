import { Resource } from '@/lib/supabase'

export default function ResourceRow({ resource }: { resource: Resource }) {
  const isFree = resource.value.toLowerCase() === 'free'

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-gray-900">{resource.name}</span>
          {resource.is_new && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">NEW</span>
          )}
          {resource.eligibility === 'uci-only' && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFD200] text-gray-900">UCI-Only</span>
          )}
        </div>
      </td>
      <td className="px-4 py-4">
        <span className={`font-medium ${isFree ? 'text-green-600' : 'text-gray-700'}`}>
          {resource.value}
        </span>
      </td>
      <td className="px-4 py-4 text-gray-500 hidden md:table-cell max-w-sm">
        {resource.description}
      </td>
      <td className="px-4 py-4 text-right">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1.5 rounded-md bg-gray-900 text-white text-xs font-medium hover:bg-gray-700 transition-colors"
        >
          Get it
        </a>
      </td>
    </tr>
  )
}
