"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
}

export function ParallaxImage({ src, alt, speed = 0.3 }: ParallaxImageProps) {
  const [offsetY, setOffsetY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      if (isInView) {
        setIsVisible(true)
        const scrollPosition = window.scrollY
        setOffsetY(scrollPosition * speed)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full transform transition-opacity duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateY(${offsetY}px) scale(1.1)`,
        }}
      >
        <Image src={src} alt={alt} fill className="object-cover" priority />
      </div>
    </div>
  )
}
