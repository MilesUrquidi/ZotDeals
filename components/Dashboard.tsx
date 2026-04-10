"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Resource, incrementClickCount } from "@/lib/supabase";
import FiltersBar from "./FiltersBar";
import ResourceTable from "./ResourceTable";
import EmailGateModal from "./EmailGateModal";
import ShareModal from "./ShareModal";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "UCI-Only", value: "uci-only" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Productivity", value: "productivity" },
  { label: "Design", value: "design" },
  { label: "Dev Tools", value: "dev-tools" },
  { label: "AI", value: "ai" },
  { label: "Career", value: "career" },
];

export default function Dashboard({ resources }: { resources: Resource[] }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [pendingDeal, setPendingDeal] = useState<{ name: string; url: string } | null>(null);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const filtered = resources
    .filter((r) => activeFilter === "all" || r.tags.includes(activeFilter))
    .filter(
      (r) =>
        !query ||
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    const handleReturn = () => {
      if (localStorage.getItem("zotdeals_visited_from_deal")) {
        localStorage.removeItem("zotdeals_visited_from_deal");
        setShareModalOpen(true);
      }
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") handleReturn();
    };
    window.addEventListener("focus", handleReturn);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("focus", handleReturn);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  function handleCardClick(id: string, name: string, url: string) {
    incrementClickCount(id);
    const hasEmail = localStorage.getItem("zotdeals_email");
    if (hasEmail) {
      localStorage.setItem("zotdeals_visited_from_deal", "true");
      window.open(url, "_blank");
    } else {
      setPendingDeal({ name, url });
    }
  }

  function handleEmailSuccess(url: string) {
    setPendingDeal(null);
    localStorage.setItem("zotdeals_visited_from_deal", "true");
    window.open(url, "_blank");
  }

  return (
    <div>
      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search deals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#04c0fd] transition-colors"
        />
      </div>

      <FiltersBar
        filters={FILTERS}
        active={activeFilter}
        onChange={setActiveFilter}
      />
      <p className="text-xs text-gray-400 mb-3">
        {filtered.length} {filtered.length === 1 ? "deal" : "deals"}
      </p>
      <ResourceTable
        resources={filtered}
        filterKey={activeFilter}
        onCardClick={handleCardClick}
      />

      <AnimatePresence>
        {pendingDeal && (
          <EmailGateModal
            resourceName={pendingDeal.name}
            resourceUrl={pendingDeal.url}
            onSuccess={handleEmailSuccess}
            onClose={() => setPendingDeal(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shareModalOpen && (
          <ShareModal onClose={() => setShareModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
