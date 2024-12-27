'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from './countdown-timer'
import { useRouter } from 'next/navigation'

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleJoinNow = () => {
    setIsOpen(false)
    router.push('/mentorship')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-primary">
            Mentorship is LIVE!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl font-bold">₹9,999</span>
              <span className="text-xl text-muted-foreground line-through">₹19,999</span>
              <span className="text-green-500 font-semibold">50% OFF</span>
            </div>
            <p className="text-sm text-muted-foreground">Limited Period Offer</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-red-500">Batch Closes Soon!</p>
            <div className="mt-4">
{/* <CountdownTimer targetDate={new Date(2024, 0, 15, 23, 59, 59)} /> */}
<CountdownTimer targetDate={new Date(2024, 0, 15, 23, 59, 59)} />

            </div>
          </div>
          <Button 
            className="w-full"
            size="lg"
            onClick={handleJoinNow}
          >
            Join Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

