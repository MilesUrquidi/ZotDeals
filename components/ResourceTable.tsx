import { Resource } from '@/lib/supabase'
import ResourceRow from './ResourceRow'

export default function ResourceTable({ resources }: { resources: Resource[] }) {
  if (resources.length === 0) {
    return <p className="text-gray-400 text-sm py-8">No resources found.</p>
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left px-4 py-3 font-medium text-gray-500">Resource</th>
            <th className="text-left px-4 py-3 font-medium text-gray-500">Value</th>
            <th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Description</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {resources.map(resource => (
            <ResourceRow key={resource.id} resource={resource} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
