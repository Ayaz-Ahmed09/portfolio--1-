import PageTransition from "@/components/page-transition"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
// Uncomment one of these to use a different skill visualization style
// import Skills from "@/components/skills-bars"
// import Skills from "@/components/skills-hexagon"
// import Skills from "@/components/skills-diamond"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  )
}
