"use client"

import { useEffect, useRef } from "react"

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid configuration
    const gridSize = 50
    const dotSize = 1
    const lineWidth = 0.5
    const goldColor = "#D4AF37"
    const opacity = 0.1

    // Draw grid pattern
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Set styles
      ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`
      ctx.fillStyle = `rgba(212, 175, 55, ${opacity * 2})`
      ctx.lineWidth = lineWidth

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw dots at intersections
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Add some geometric shapes at specific points
      const shapes = [
        { x: canvas.width * 0.1, y: canvas.height * 0.2, size: 20, type: "triangle" },
        { x: canvas.width * 0.8, y: canvas.height * 0.3, size: 15, type: "square" },
        { x: canvas.width * 0.3, y: canvas.height * 0.7, size: 18, type: "circle" },
        { x: canvas.width * 0.9, y: canvas.height * 0.8, size: 12, type: "diamond" },
        { x: canvas.width * 0.2, y: canvas.height * 0.9, size: 16, type: "triangle" },
      ]

      shapes.forEach((shape) => {
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 3})`
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`
        ctx.lineWidth = 1

        switch (shape.type) {
          case "triangle":
            ctx.beginPath()
            ctx.moveTo(0, -shape.size / 2)
            ctx.lineTo(shape.size / 2, shape.size / 2)
            ctx.lineTo(-shape.size / 2, shape.size / 2)
            ctx.closePath()
            ctx.stroke()
            break
          case "square":
            ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
            break
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2)
            ctx.stroke()
            break
          case "diamond":
            ctx.beginPath()
            ctx.moveTo(0, -shape.size / 2)
            ctx.lineTo(shape.size / 2, 0)
            ctx.lineTo(0, shape.size / 2)
            ctx.lineTo(-shape.size / 2, 0)
            ctx.closePath()
            ctx.stroke()
            break
        }
        ctx.restore()
      })
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ background: "black" }} />
}
