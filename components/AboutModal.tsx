"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AboutModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-gray-500 font-bold hover:text-gray-900 transition-colors cursor-pointer"
      >
        About
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About ZotDeals
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hey UCI students! Thanks for using my app. Most people don't
              realize how much their{" "}
              <span className="font-medium text-[#23c3ea]">.edu email</span> is
              actually worth. I built this to fix that. One clean place to find
              every free tool, discount, and perk available to you!
            </p>

            <div className="border-t border-gray-100 pt-5 text-sm text-gray-400">
              Built by{" "}
              <a
                href="https://github.com/MilesUrquidi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline underline-offset-2 hover:text-[#23c3ea] transition-colors"
              >
                Miles
              </a>
              . Know a deal that's missing?{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdJRSRzrb5tulw2ZhsbVppnDlVEFJI0E_t3iPryPtIpDowtyw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 underline underline-offset-2 hover:text-[#23c3ea] transition-colors"
              >
                Submit it.
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
