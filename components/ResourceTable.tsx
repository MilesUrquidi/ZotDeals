import { Resource } from "@/lib/supabase";
import ResourceRow from "./ResourceRow";

export default function ResourceTable({
  resources,
}: {
  resources: Resource[];
}) {
  if (resources.length === 0) {
    return (
      <p className="text-gray-400 text-sm py-12 text-center">No perks found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {resources.map((resource) => (
        <ResourceRow key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
