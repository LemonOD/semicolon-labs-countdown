"use client"

import * as React from "react"
import {useEffect, useState} from "react";

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLaunched, setIsLaunched] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setIsLaunched(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return <div className="w-full h-[150px] bg-muted/20 rounded-lg" />
  }

  if (isLaunched) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary">We are live!</h2>
        <p className="mt-2">Semicolon Labs has officially launched.</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold">Launching In</h2>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="flex flex-col rounded-lg bg-card p-3 shadow-sm">
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-xs text-muted-foreground">{timeLeft.days > 1 ? 'Days': 'Day'}</span>
        </div>
        <div className="flex flex-col rounded-lg bg-card p-3 shadow-sm">
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-xs text-muted-foreground">{timeLeft.hours > 1 ? 'Hours': 'Hour'}</span>
        </div>
        <div className="flex flex-col rounded-lg bg-card p-3 shadow-sm">
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-xs text-muted-foreground">{timeLeft.minutes > 1 ? 'minutes': 'minute'}</span>
        </div>
        <div className="flex flex-col rounded-lg bg-card p-3 shadow-sm">
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-xs text-muted-foreground">{timeLeft.seconds > 1 ? 'seconds': 'second'}</span>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">Go-Live: Friday, April 23, 2025 at 00:01 WAT</div>
    </div>
  )
}
