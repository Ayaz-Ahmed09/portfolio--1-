"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (theme !== "space") return

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

    // Star properties
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = []
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000) // Reduced density for subtlety

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.02,
      })
    }

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Subtle twinkle effect
        star.opacity += Math.random() * 0.005 - 0.0025
        star.opacity = Math.max(0.3, Math.min(0.8, star.opacity))

        // Subtle movement
        star.y -= star.speed
        if (star.y < -5) {
          star.y = canvas.height + 5
          star.x = Math.random() * canvas.width
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, mounted])

  if (!mounted || theme !== "space") return null

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-transparent pointer-events-none opacity-70" />
}
