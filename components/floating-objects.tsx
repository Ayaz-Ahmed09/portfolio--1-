"use client"

import { useEffect, useRef, useState } from "react"
import type * as THREE from "three"
import { useFrame, Canvas } from "@react-three/fiber"
import { Float, Environment, Preload } from "@react-three/drei"
import { useInView } from "framer-motion"
import { useTheme } from "next-themes"

// Planet component with subtle animation
function Planet({ position, scale, rotationSpeed, color, ...props }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale} {...props}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.2} roughness={0.8} />
      </mesh>
    </Float>
  )
}

// Scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      {/* Subtle planets in the distance */}
      <Planet position={[-15, 4, -25]} scale={2} rotationSpeed={0.001} color="#7678ed" />
      <Planet position={[20, -6, -30]} scale={3} rotationSpeed={0.0005} color="#3a3f8c" />
      <Planet position={[-10, -8, -20]} scale={1.5} rotationSpeed={0.001} color="#4a5568" />

      <Environment preset="night" />
      <Preload all />
    </>
  )
}

export default function FloatingObjects() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Only show in space theme
  if (theme !== "space") return null

  return (
    <div ref={ref} className="fixed inset-0 -z-5 pointer-events-none opacity-60">
      {isInView && (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} style={{ pointerEvents: "none" }}>
          <Scene />
        </Canvas>
      )}
    </div>
  )
}
