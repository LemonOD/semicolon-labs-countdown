"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ForceTheme() {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const currentTheme = resolvedTheme || "light"
    setTheme(currentTheme)
  }, [resolvedTheme, setTheme])

  return null
}
