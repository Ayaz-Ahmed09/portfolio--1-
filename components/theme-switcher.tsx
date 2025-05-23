"use client"

import { useState, useEffect } from "react"
import { Check, Code, Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const themes = [
  {
    name: "Light",
    id: "light",
    icon: Sun,
  },
  {
    name: "Dark",
    id: "dark",
    icon: Moon,
  },
  {
    name: "Coding",
    id: "coding",
    icon: Code,
  },
  {
    name: "Space",
    id: "space",
    icon: Moon,
  },
  {
    name: "Minimal",
    id: "minimal",
    icon: Moon,
  },
  {
    name: "System",
    id: "system",
    icon: Monitor,
  },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 data-[theme=space]:rotate-0 data-[theme=space]:scale-0 data-[theme=minimal]:rotate-0 data-[theme=minimal]:scale-0 data-[theme=coding]:rotate-0 data-[theme=coding]:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 data-[theme=space]:rotate-0 data-[theme=space]:scale-100 data-[theme=minimal]:rotate-0 data-[theme=minimal]:scale-0 data-[theme=coding]:rotate-0 data-[theme=coding]:scale-0" />
          <Code className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all data-[theme=coding]:rotate-0 data-[theme=coding]:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((t) => (
          <DropdownMenuItem key={t.id} onClick={() => setTheme(t.id)} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <t.icon className="h-4 w-4" />
              <span>{t.name}</span>
            </div>
            {theme === t.id && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
