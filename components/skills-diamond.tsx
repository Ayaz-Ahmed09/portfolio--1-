"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SkillsDiamond() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

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
    { name: "UI/UX Principles", level: 80 },
  ]

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
  ]

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
  ]

  // Function to get color based on skill level
  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-br from-primary to-primary/70"
    if (level >= 80) return "bg-gradient-to-br from-blue-500 to-blue-400"
    if (level >= 70) return "bg-gradient-to-br from-yellow-500 to-yellow-400"
    return "bg-gradient-to-br from-orange-500 to-orange-400"
  }

  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="container px-4 md:px-6">
        <div ref={ref} className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-2"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Here are the technologies and tools I work with on a daily basis.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-12 w-full max-w-5xl"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="diamond-container">
                    <div className={`diamond ${getSkillColor(skill.level)} shadow-lg`}>
                      <div className="diamond-content">
                        <span className="text-lg font-bold text-white">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 font-medium">{skill.name}</h3>
                </motion.div>
              ))}
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
              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
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
              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                {toolsSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)" }}
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
  )
}
