'use client'

import { useEffect, useState } from 'react'

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div>
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-sm text-muted-foreground">Days</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm text-muted-foreground">Hours</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm text-muted-foreground">Minutes</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}

