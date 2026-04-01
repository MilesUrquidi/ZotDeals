import { Resource } from '@/lib/supabase'
import { ExternalLink } from 'lucide-react'

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#005461] flex items-center justify-center shrink-0">
      <span className="text-white font-bold text-base">{name[0]}</span>
    </div>
  )
}

export default function ResourceRow({ resource }: { resource: Resource }) {
  const isFree = resource.value.toLowerCase() === 'free'

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col gap-3 min-h-[160px]">

      {/* Header: logo + name */}
      <div className="flex items-center gap-3">
        {resource.logo_url ? (
          <img
            src={resource.logo_url}
            alt={resource.name}
            className="w-11 h-11 rounded-xl object-contain border border-gray-100 bg-white"
          />
        ) : (
          <LogoPlaceholder name={resource.name} />
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-gray-900 text-base leading-tight">{resource.name}</h3>
            {resource.is_new && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">NEW</span>
            )}
          </div>
          {resource.eligibility === 'uci-only' && (
            <span className="text-xs font-medium text-[#018790]">UCI-Only</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 line-clamp-2 flex-1 leading-relaxed">
        {resource.description}
      </p>

      {/* Footer: value + link */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          isFree
            ? 'bg-[#00B7B5]/10 text-[#005461]'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {resource.value}
        </span>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-semibold text-[#005461] hover:text-[#018790] transition-colors"
        >
          Get it <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
