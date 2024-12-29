'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
// import { CountdownTimer } from './countdown-timer'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleJoinNow = () => {
    setIsOpen(false)
    router.push('/mentorship')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-indigo-50 via-white to-emerald-50 shadow-lg rounded-lg">
        <DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DialogTitle className="text-center text-3xl font-extrabold text-indigo-600">
              New Mentorship Batch Announced!
            </DialogTitle>
          </motion.div>
        </DialogHeader>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 py-4"
        >
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-emerald-600">₹9,999</span>
              <span className="text-lg text-gray-500 line-through">₹19,999</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                50% OFF
              </span>
            </div>
            <p className="text-sm text-indigo-500">Flexible payment options available starting at ₹2,999/month</p>
            <p className="text-base font-medium text-red-500">Limited Period Offer</p>
          </div>
          {/* <div className="text-center">
            <p className="text-lg font-semibold text-indigo-600">Batch Closes On January 15!</p>
            <div className="mt-4">
              <CountdownTimer targetDate={new Date('2024-01-15T23:59:59')} />
            </div>
          </div> */}
          <Button
            className="w-full bg-gradient-to-r from-emerald-500 to-indigo-500 text-white hover:from-emerald-600 hover:to-indigo-600"
            size="lg"
            onClick={handleJoinNow}
          >
            Enroll Now
          </Button>
          <div className="text-center text-sm text-gray-500 mt-2">
            To know more, contact <span className="text-indigo-600 font-semibold">@jcmentorship_bot</span>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
