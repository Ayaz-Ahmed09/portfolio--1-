"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import ResumeViewer from "./resume-viewer"
import ThemeSwitcher from "./theme-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleResumeClick = () => {
    closeMenu()
    setIsResumeOpen(true)
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div className="container px-4 mx-auto flex justify-center">
          <div
            className={`rounded-full ${
              isScrolled
                ? "bg-background/80 backdrop-blur-md shadow-md px-6 py-2"
                : "bg-background/30 backdrop-blur-sm px-6 py-3"
            } transition-all duration-300 max-w-4xl w-full mx-auto`}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                <span className="text-primary">Ayaz</span> Ahmed
              </Link>

              <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium px-3 py-2 rounded-full transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="outline" size="sm" onClick={handleResumeClick} className="gap-1 rounded-full ml-1">
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
                <ThemeSwitcher />
              </nav>

              <div className="flex md:hidden items-center space-x-2">
                <ThemeSwitcher />
                <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
                <span className="text-primary">Ayaz</span> Ahmed
              </Link>
              <Button variant="ghost" size="icon" onClick={closeMenu} className="rounded-full">
                <X className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center space-y-6 p-4 h-[calc(100vh-4rem)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={handleResumeClick} className="gap-1 rounded-full mt-4">
                <FileText className="h-4 w-4" />
                View Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <ResumeViewer />
        </DialogContent>
      </Dialog>
    </>
  )
}
