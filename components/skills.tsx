"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git", level: 85 },
    { name: "Responsive Design", level: 95 },
    // { name: "UI/UX Principles", level: 80 },
  ];

  const frontendSkills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "Context API",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "npm",
    "Webpack",
    "ESLint",
    "Prettier",
    "Vercel",
  ];

  // Function to calculate stroke dasharray and dashoffset for SVG circle
  const calculateCircleProgress = (percent: number) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    return { circumference, offset };
  };

  return (
    <section
      id="skills"
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-2"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills & Expertise
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Here are the technologies and tools I work with on a daily
                basis.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            ref={progressRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-12 w-full max-w-5xl"
            style={{ x }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
              {skills.map((skill, index) => {
                const { circumference, offset } = calculateCircleProgress(
                  skill.level
                );
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex flex-col items-center"
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative w-24 h-24 mb-3">
                      {/* Background circle */}
                      <svg className="w-full h-full" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          strokeWidth="12"
                          className="stroke-muted opacity-30"
                        />
                      </svg>
                      {/* Progress circle */}
                      <svg
                        className="absolute top-0 left-0 w-full h-full -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        <motion.circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          strokeWidth="12"
                          className="stroke-primary"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={
                            isInView
                              ? { strokeDashoffset: offset }
                              : { strokeDashoffset: circumference }
                          }
                          transition={{
                            duration: 1.5,
                            delay: 0.2 + index * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </svg>
                      {/* Percentage text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-lg font-bold"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.1,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold">
                Frontend Development
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-2 sm:grid-cols-2"
              >
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(var(--primary), 0.1)",
                    }}
                    className="flex items-center rounded-lg border p-2 text-sm"
                    custom={index}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold">
                Tools & Platforms
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-2 sm:grid-cols-2"
              >
                {toolsSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(var(--primary), 0.1)",
                    }}
                    className="flex items-center rounded-lg border p-2 text-sm"
                    custom={index}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
