"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Briefcase, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const experiences = [
    {
      title: "Senior Front-End Developer",
      company: "TechSolutions Inc.",
      period: "2021 - Present",
      description:
        "Leading the front-end development team in creating responsive and user-friendly web applications using React and Next.js. Implemented modern UI/UX designs and improved website performance by 40%.",
      achievements: [
        "Redesigned the company's flagship product, resulting in a 35% increase in user engagement",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Mentored junior developers and conducted code reviews to maintain high code quality",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Front-End Developer",
      company: "DigitalCraft Agency",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement pixel-perfect UIs and ensure responsive design across all devices.",
      achievements: [
        "Built an e-commerce platform that increased client's online sales by 45%",
        "Optimized website loading times, improving Core Web Vitals scores by 30%",
        "Implemented accessibility improvements that brought all client sites to WCAG AA compliance",
      ],
      technologies: ["JavaScript", "React", "CSS3", "SASS", "Webpack"],
    },
    {
      title: "Web Developer",
      company: "CreativeMinds Studio",
      period: "2017 - 2019",
      description:
        "Started as a junior developer and quickly progressed to handling complete front-end projects. Worked on various websites for clients in different industries.",
      achievements: [
        "Developed a custom CMS interface that improved content management efficiency by 50%",
        "Created responsive email templates that increased open rates by 25%",
        "Implemented SEO best practices that improved client site rankings by an average of 15 positions",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-2"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                My professional journey and the impact I've made along the way.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-12 w-full max-w-4xl space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div key={exp.title + exp.company} variants={itemVariants} custom={index}>
                <Card className="overflow-hidden border-l-4 border-l-primary">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit flex items-center gap-1 px-3 py-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <h4 className="font-semibold text-sm uppercase tracking-wider mb-2 text-primary">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
