import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, FileDown, ShieldCheck, Cpu } from "lucide-react";
import Hero3DCanvas from "../components/canvas/Hero3DCanvas";
import PageTransition from "../components/transitions/PageTransition";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <PageTransition variant="fadeUp">
      <section className="min-h-[calc(100vh-80px)] pt-24 sm:pt-28 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Backend & Microservices Engineering</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-spring">{personalInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200">
                <span className="text-emerald-400">Java Spring Boot</span> Developer
              </h2>
            </div>

            {/* Experience & Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              With <strong className="text-white font-semibold">{personalInfo.experience}</strong> specializing in designing, building, and deploying robust, high-performance web applications, resilient <strong>RESTful microservices</strong>, real-time WebSockets, and complex third-party API ecosystems.
            </p>

            {/* Tech Pill highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Microservices
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Spring Security / JWT
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> WebSockets & FCM
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm tracking-wide shadow-neon-spring transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>View Architecture & Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-all hover:border-emerald-400/40 flex items-center justify-center gap-2"
              >
                <span>About & Resume</span>
              </Link>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 3D Canvas Visualizer */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-lg relative">
              <Hero3DCanvas />
              
              {/* Overlay Hint */}
              <div className="text-center mt-[-20px] relative z-10">
                <span className="text-[11px] font-mono text-slate-400/80 bg-slate-900/80 px-3 py-1 rounded-full border border-white/10">
                  ✨ Interactive 3D Spring Core • Drag to Rotate
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
