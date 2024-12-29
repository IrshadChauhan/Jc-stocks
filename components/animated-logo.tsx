'use client'

import { LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

export function AnimatedLogo() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="relative"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-emerald-500"
        >
          <LineChart className="h-8 w-8" />
        </motion.div>
      </motion.div>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent"
      >
        JCStocks
      </motion.span>
    </div>
  )
}

