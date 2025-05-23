"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A responsive dashboard for an e-commerce platform with sales analytics, inventory management, and customer insights.",
      image: "/e-com.png?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      demoLink: "https://ecommerce-dashboard-peach.vercel.app/",
      githubLink: "https://github.com/Ayaz-Ahmed09/ecommerce-dashboard--1-",
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data, forecasts, and location-based weather information.",
      image: "/Weather-App.png?height=400&width=600",
      tags: ["React", "OpenWeather API", "Geolocation", "CSS Modules"],
      demoLink: "https://weather-app-pink-nu-17.vercel.app/",
      githubLink: "https://github.com/Ayaz-Ahmed09/weather-app",
    },
    {
      title: "Task Management App",
      description:
        "A productivity tool for managing tasks, setting deadlines, and tracking progress with drag-and-drop functionality.",
      image: "/task.png?height=400&width=600",
      tags: ["React", "TypeScript", "Redux", "Framer Motion"],
      demoLink: "https://task-management-app-eta-nine.vercel.app/",
      githubLink: "https://github.com/Ayaz-Ahmed09/task-management-app",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and professional experience with a modern design.",
      image: "/Portfolio.png?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      demoLink: "https://space-portfolio-three-eta.vercel.app/",
      githubLink: "https://github.com/Ayaz-Ahmed09/space-portfolio",
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted/50">
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
                My Projects
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Here are some of the projects I've worked on recently.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="h-full overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
