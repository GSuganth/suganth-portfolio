import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ParticleBackground from "./components/canvas/ParticleBackground";

// Page Views
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  // Scroll to top automatically on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Heavily Animated Glowing Gradient Blurs (Deep Dark Background Atmosphere) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glowing Emerald / Spring Blob */}
        <div className="absolute -top-[15%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-emerald-500/15 blur-[130px] animate-blob" />
        
        {/* Glowing Cyber Cyan Blob */}
        <div className="absolute top-[35%] -right-[10%] w-[32rem] h-[32rem] rounded-full bg-cyan-500/12 blur-[140px] animate-blob-slow" />
        
        {/* Glowing Deep Indigo/Violet Blob */}
        <div className="absolute -bottom-[10%] left-[20%] w-[38rem] h-[38rem] rounded-full bg-indigo-600/15 blur-[150px] animate-blob" />

        {/* Ambient Subtle Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Interactive Particles.js Canvas Reacting to Cursor / Touch */}
      <ParticleBackground />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Full-Page Seamless Animated Router */}
      <main className="flex-grow flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* System Footer */}
      <Footer />
    </div>
  );
}
