"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import ResumeViewer from "./resume-viewer";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleDownloadResume = () => {
    // In a real implementation, this would be a direct link to the PDF file
    toast({
      title: "Resume downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  };

  // Animation variants for the name
  const nameLetters = "Ayaz Ahmed".split("");

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background to-background"></div>
      <motion.div
        style={{ y, opacity }}
        className="container px-4 md:px-6 relative z-10"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-primary/10 p-1 px-3">
              <div className="text-sm font-medium">Front-End Developer</div>
            </div>
          </motion.div>
          <div className="overflow-hidden">
            <div className="flex justify-center">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px]"
          >
            <p className="text-muted-foreground md:text-xl">
              Building beautiful, responsive, and user-friendly web experiences
              with modern technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button onClick={handleResumeClick} className="gap-1">
              <FileText className="h-4 w-4" />
              View Resume
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadResume}
              className="gap-1"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 mt-4"
          >
            <Link
              href="https://github.com/Ayaz-Ahmed09?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ayaz-ahmed-66a195218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:ayazag960@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 max-w-3xl"
            data-theme="coding"
          >
            <div className="code-block">
              <div className="code-dots">
                <div className="code-dot code-dot-red"></div>
                <div className="code-dot code-dot-yellow"></div>
                <div className="code-dot code-dot-green"></div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-line-number">1</span>
                  <span className="code-keyword">class</span>{" "}
                  <span className="code-function">AyazAhmed</span>{" "}
                  <span className="code-punctuation">{"{"}</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">2</span>
                  <span className="code-keyword"> constructor</span>
                  <span className="code-punctuation">()</span>{" "}
                  <span className="code-punctuation">{"{"}</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">3</span>
                  <span className="code-property"> this.name</span>{" "}
                  <span className="code-operator">=</span>{" "}
                  <span className="code-string">"Ayaz Ahmed"</span>
                  <span className="code-punctuation">;</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">4</span>
                  <span className="code-property"> this.role</span>{" "}
                  <span className="code-operator">=</span>{" "}
                  <span className="code-string">"Front-End Developer"</span>
                  <span className="code-punctuation">;</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">5</span>
                  <span className="code-property"> this.skills</span>{" "}
                  <span className="code-operator">=</span>{" "}
                  <span className="code-punctuation">[</span>
                  <span className="code-string">"React"</span>
                  <span className="code-punctuation">,</span>{" "}
                  <span className="code-string">"Next.js"</span>
                  <span className="code-punctuation">,</span>{" "}
                  <span className="code-string">"TypeScript"</span>
                  <span className="code-punctuation">,</span>{" "}
                  <span className="code-string">"Tailwind CSS"</span>
                  <span className="code-punctuation">];</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">6</span>
                  <span className="code-punctuation">{" }"}</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">7</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">8</span>
                  <span className="code-keyword"> sayHello</span>
                  <span className="code-punctuation">()</span>{" "}
                  <span className="code-punctuation">{"{"}</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">9</span>
                  <span className="code-keyword"> return</span>{" "}
                  <span className="code-string">
                    "Thanks for visiting my portfolio!"
                  </span>
                  <span className="code-punctuation">;</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">10</span>
                  <span className="code-punctuation">{" }"}</span>
                </div>
                <div className="code-line">
                  <span className="code-line-number">11</span>
                  <span className="code-punctuation">{"}"}</span>
                  <span className="code-cursor"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#about">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </Link>
      </motion.div>

      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <ResumeViewer />
        </DialogContent>
      </Dialog>
    </section>
  );
}
