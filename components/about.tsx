"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
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

  return (
    <section id="about" className="py-12 md:py-24 lg:py-32 bg-muted/50">
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
                About Me
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                I'm a passionate front-end developer with 5 years of
                professional experience building modern web applications.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center space-y-4 md:items-start md:text-left"
            >
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
                <Image
                  src="/Ayaz.jpeg?height=320&width=320"
                  alt="Ayaz Ahmed"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-4 text-left">
                <h3 className="text-2xl font-bold">My Journey</h3>
                <p className="text-muted-foreground">
                  I started my journey as a front-end developer after completing
                  my Computer Science degree. For the past 5 years, I've been
                  working with modern JavaScript frameworks like React and
                  Next.js to build responsive and user-friendly web
                  applications.
                </p>
                <p className="text-muted-foreground">
                  I'm passionate about creating clean, efficient code and
                  delivering exceptional user experiences. I enjoy solving
                  complex problems and continuously learning new technologies to
                  stay at the forefront of web development.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Rocket className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-2">Fast Learner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    I quickly adapt to new technologies and frameworks, allowing
                    me to stay current with industry trends.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Code2 className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-2">Clean Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    I write maintainable, well-documented code following best
                    practices and design patterns.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <CardTitle className="mt-2">Problem Solver</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    I enjoy tackling complex challenges and finding elegant
                    solutions to difficult problems.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
