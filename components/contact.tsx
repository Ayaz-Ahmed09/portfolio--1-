"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
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
                Get In Touch
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a project in mind or want to discuss opportunities? Feel
                free to reach out!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:ayazag960@gmail.com"
                      className="text-sm hover:underline"
                    >
                      ayazag960@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      href="tel:+923096194974"
                      className="text-sm hover:underline"
                    >
                      +92309-6194974
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">Lahore, Pakistan</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="coding-theme-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Let's Connect</CardTitle>
                  <CardDescription>
                    I'm always open to new opportunities and collaborations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Whether you're looking for a front-end developer for your
                    project, have a question, or just want to say hi, I'd love
                    to hear from you!
                  </p>
                  <div className="mt-4 code-block" data-theme="coding">
                    <div className="code-dots">
                      <div className="code-dot code-dot-red"></div>
                      <div className="code-dot code-dot-yellow"></div>
                      <div className="code-dot code-dot-green"></div>
                    </div>
                    <div className="code-content">
                      <div className="code-line">
                        <span className="code-line-number">1</span>
                        <span className="code-keyword">const</span>{" "}
                        <span className="code-variable">contact</span>{" "}
                        <span className="code-operator">=</span>{" "}
                        <span className="code-punctuation">{"{"}</span>
                      </div>
                      <div className="code-line">
                        <span className="code-line-number">2</span>
                        <span className="code-property"> name</span>
                        <span className="code-punctuation">:</span>{" "}
                        <span className="code-string">"Ayaz Ahmed"</span>
                        <span className="code-punctuation">,</span>
                      </div>
                      <div className="code-line">
                        <span className="code-line-number">3</span>
                        <span className="code-property"> email</span>
                        <span className="code-punctuation">:</span>{" "}
                        <span className="code-string">
                          "ayazag960@gmail.com"
                        </span>
                        <span className="code-punctuation">,</span>
                      </div>
                      <div className="code-line">
                        <span className="code-line-number">4</span>
                        <span className="code-property"> phone</span>
                        <span className="code-punctuation">:</span>{" "}
                        <span className="code-string">"+92309-6194974"</span>
                        <span className="code-punctuation">,</span>
                      </div>
                      <div className="code-line">
                        <span className="code-line-number">5</span>
                        <span className="code-property"> available</span>
                        <span className="code-punctuation">:</span>{" "}
                        <span className="code-keyword">true</span>
                        <span className="code-punctuation">,</span>
                      </div>
                      <div className="code-line">
                        <span className="code-line-number">6</span>
                        <span className="code-punctuation">{"}"}</span>
                        <span className="code-cursor"></span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-1">
                          <svg
                            className="animate-spin h-4 w-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
