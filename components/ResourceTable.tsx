"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Resource } from "@/lib/supabase";
import ResourceRow from "./ResourceRow";

export default function ResourceTable({
  resources,
  filterKey,
  onCardClick,
}: {
  resources: Resource[];
  filterKey: string;
  onCardClick: (id: string, name: string, url: string) => void;
}) {
  if (resources.length === 0) {
    return (
      <p className="text-gray-400 text-sm py-12 text-center">No deals found.</p>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={filterKey}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 14 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {resources.map((resource) => (
          <ResourceRow
            key={resource.id}
            resource={resource}
            onCardClick={onCardClick}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
