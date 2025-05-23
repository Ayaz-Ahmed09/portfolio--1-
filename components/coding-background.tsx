"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function CodingBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || theme !== "coding") return null

  return (
    <div className="fixed inset-0 -z-10 opacity-10 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs text-green-500 whitespace-nowrap"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateY(${Math.random() * 100}vh)`,
              animation: `fall ${5 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`,
              opacity: 0.7,
            }}
          >
            {generateRandomCode()}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  )
}

function generateRandomCode() {
  const codeSnippets = [
    "const renderComponent = () => { return <Component {...props} />; };",
    "function calculateTotal(items) { return items.reduce((sum, item) => sum + item.price, 0); }",
    "useEffect(() => { fetchData(); }, [dependencies]);",
    "export default function App() { return <Main />; }",
    "const [state, setState] = useState(initialState);",
    "const result = await fetch('/api/data').then(res => res.json());",
    "import React from 'react';",
    "const styles = { color: 'blue', fontSize: '16px' };",
    "const handleSubmit = (e) => { e.preventDefault(); }",
    "return data.map((item) => <ListItem key={item.id} {...item} />);",
  ]

  return codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
}
