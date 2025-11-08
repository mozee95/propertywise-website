'use client'

import { useState, useEffect } from 'react'

interface RotatingTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function RotatingText({ texts, interval = 3000, className = '' }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 300) // Half of the transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span
      className={`transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  )
}