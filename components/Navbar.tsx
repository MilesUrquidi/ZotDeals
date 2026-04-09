'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AboutModal from './AboutModal'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full border-b border-gray-100 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
          <Image src="/logo.svg" alt="" width={32} height={32} />
          <span className="text-base font-bold text-gray-900">ZotDeals</span>
        </Link>
        <AboutModal />
      </div>
    </motion.nav>
  )
}
