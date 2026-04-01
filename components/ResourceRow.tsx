import { Resource } from '@/lib/supabase'
import { ExternalLink } from 'lucide-react'

function getLogoUrl(resource: Resource): string | null {
  if (resource.logo_url) return resource.logo_url
  try {
    const domain = new URL(resource.url).hostname.replace('www.', '')
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
  } catch {
    return null
  }
}

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#23c3ea] flex items-center justify-center shrink-0">
      <span className="text-white font-bold text-base">{name[0]}</span>
    </div>
  )
}

export default function ResourceRow({ resource }: { resource: Resource }) {
  const isFree = resource.value.toLowerCase() === 'free'
  const logoUrl = getLogoUrl(resource)

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col gap-3 min-h-[160px]">

      {/* Header: logo + name */}
      <div className="flex items-center gap-3">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={resource.name}
            className="w-11 h-11 rounded-xl object-contain border border-gray-100 bg-white p-1"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
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
            <span className="text-xs font-medium text-[#3ab8d8]">UCI-Only</span>
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
            ? 'bg-[#04c0fd]/10 text-[#23c3ea]'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {resource.value}
        </span>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-semibold text-[#23c3ea] hover:text-[#3ab8d8] transition-colors"
        >
          Get it <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
