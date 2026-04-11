import { useState } from 'react'
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

export default function ResourceRow({
  resource,
  onCardClick,
}: {
  resource: Resource
  onCardClick: (id: string, name: string, url: string) => void
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const isFree = resource.value.toLowerCase() === 'free'
  const logoUrl = getLogoUrl(resource)

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault()
        onCardClick(resource.id, resource.name, resource.url)
      }}
      className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col gap-3 min-h-[160px] cursor-pointer"
    >

      {/* Header: logo + name */}
      <div className="flex items-center gap-3">
        {logoUrl && !imgFailed ? (
          <img
            src={logoUrl}
            alt={resource.name}
            className="w-11 h-11 rounded-xl object-contain border border-gray-100 bg-white p-1"
            onError={() => setImgFailed(true)}
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
            <span className="text-xs font-medium text-[#3ab8d8] mt-0.5 block">UCI-Only</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 line-clamp-2 flex-1 leading-relaxed">
        {resource.description}
      </p>

      {/* Footer: value + link */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            isFree
              ? 'bg-[#04c0fd]/10 text-[#23c3ea]'
              : 'bg-amber-50 text-amber-600'
          }`}>
            {resource.value}
          </span>
          {resource.retail_value && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
              {resource.retail_value}
            </span>
          )}
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-[#23c3ea] group-hover:translate-x-0.5 group-hover:scale-110 transition-all">
          Get it <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </a>
  )
}
