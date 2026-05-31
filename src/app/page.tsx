import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurrentPositions from "@/components/CurrentPositions";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import BlogSection from "@/components/BlogSection";
import PromptsTeaser from "@/components/PromptsTeaser";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <CurrentPositions />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <BlogSection />
        <PromptsTeaser />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </>
  );
}
