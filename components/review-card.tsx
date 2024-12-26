'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface ReviewProps {
  name: string
  profession: string
  review: string
}

export function ReviewCard({ name, profession, review }: ReviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isLongReview = review.length > 250
  
  return (
    <>
      <Card className="h-full">
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <p className="text-gray-600">
              {isLongReview ? (
                <>
                  {review.slice(0, 250)}...
                  <Button
                    variant="link"
                    className="px-0 text-primary"
                    onClick={() => setIsOpen(true)}
                  >
                    See more
                  </Button>
                </>
              ) : (
                review
              )}
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl">{name}</p>
            <p className="text-sm text-gray-500">{profession}</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Review from {name}</DialogTitle>
            <DialogDescription>
              Full review and details from the mentee
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600 whitespace-pre-wrap">{review}</p>
            <div>
              <p className="font-semibold text-xl">{name}</p>
              <p className="text-sm text-gray-500">{profession}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

