"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import { addSubscriber } from "@/lib/supabase"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EmailGateModal({
  resourceName,
  resourceUrl,
  onSuccess,
  onClose,
}: {
  resourceName: string
  resourceUrl: string
  onSuccess: (url: string) => void
  onClose: () => void
}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Open the tab immediately (synchronous, counts as user gesture)
    const tab = window.open(resourceUrl, "_blank")
    try {
      await addSubscriber(email)
    } finally {
      localStorage.setItem("zotdeals_email", email)
      setLoading(false)
      // Fallback: if popup was blocked, navigate current tab
      if (!tab || tab.closed) window.location.href = resourceUrl
      onSuccess(resourceUrl)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
    >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Get access to {resourceName}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Enter your email to unlock this deal and get notified when new deals are added.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              disabled={loading || !email}
              className="w-full bg-[#23c3ea] hover:bg-[#3ab8d8] text-white font-semibold"
            >
              {loading ? "One sec..." : "Get Access"}
            </Button>
          </form>
        </motion.div>
    </motion.div>
  )
}
