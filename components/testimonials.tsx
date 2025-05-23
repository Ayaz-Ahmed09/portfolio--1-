"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager at TechSolutions",
    // image: "/placeholder.svg?height=100&width=100",
    content:
      "Ayaz is an exceptional front-end developer. His attention to detail and ability to translate designs into flawless code is impressive. He delivered our project ahead of schedule and was very responsive to feedback. I highly recommend him for any React or Next.js project.",
    rating: 5,
    platform: "Upwork",
    project: "E-commerce Dashboard",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, DigitalCraft",
    // image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with Ayaz was a pleasure. He quickly understood our requirements and delivered a beautiful, responsive website that exceeded our expectations. His knowledge of modern front-end technologies and best practices is evident in his work. We'll definitely be hiring him again for future projects.",
    rating: 5,
    platform: "Upwork",
    project: "Company Website Redesign",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer at CreativeMinds",
    // image: "/placeholder.svg?height=100&width=100",
    content:
      "As a designer, I appreciate developers who can bring my designs to life exactly as envisioned. Ayaz did just that and more. He suggested improvements that enhanced the user experience while maintaining the design integrity. His code is clean, well-documented, and easy to maintain.",
    rating: 5,
    platform: "Upwork",
    project: "Interactive Product Showcase",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "E-commerce Director",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Ayaz helped us revamp our e-commerce platform, resulting in a 40% increase in conversion rate. His expertise in performance optimization and responsive design made a significant impact on our business. He's communicative, reliable, and delivers high-quality work consistently.",
    rating: 5,
    platform: "Upwork",
    project: "E-commerce Platform Optimization",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 2;

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

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? Math.ceil(testimonials.length / itemsPerView) - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === Math.ceil(testimonials.length / itemsPerView) - 1 ? 0 : prev + 1
    );
  };

  const visibleTestimonials = () => {
    const start = activeIndex * itemsPerView;
    return testimonials.slice(start, start + itemsPerView);
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32">
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
                Client Testimonials
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Here's what clients have to say about working with me.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-12 w-full max-w-5xl"
          >
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visibleTestimonials().map((testimonial) => (
                  <motion.div key={testimonial.id} variants={itemVariants}>
                    <Card
                      className={cn(
                        "h-full overflow-hidden",
                        "data-[theme=coding]:border-primary/20 data-[theme=coding]:bg-card/50"
                      )}
                    >
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {/* <div className="relative h-12 w-12 overflow-hidden rounded-full">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div> */}
                            <div className="text-left">
                              <h4 className="font-semibold">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Quote className="h-6 w-6 text-primary opacity-50" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-left text-muted-foreground">
                            {testimonial.content}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                className={cn(
                                  "h-5 w-5",
                                  i < testimonial.rating
                                    ? "text-primary"
                                    : "text-muted"
                                )}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-primary">
                              {testimonial.platform}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              • {testimonial.project}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <div className="flex gap-1">
                  {Array.from({
                    length: Math.ceil(testimonials.length / itemsPerView),
                  }).map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all",
                        index === activeIndex ? "bg-primary w-4" : "bg-muted"
                      )}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial group ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
