import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FileDown, CheckCircle2, Server, Database, Shield, Zap } from "lucide-react";
import PageTransition from "../components/transitions/PageTransition";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const handleDownloadResume = () => {
    // Interactive celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#10b981", "#06b6d4", "#6366f1", "#ffffff"],
    });

    // If a resume file is available in public/resume.pdf, trigger direct download
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`;
    link.target = "_blank";
    link.click();
  };

  const strengths = [
    {
      title: "Microservices & Distributed Architecture",
      desc: "Architecting loosely coupled, fault-tolerant microservices with Spring Cloud patterns, connection pooling, and circuit breakers.",
      icon: Server,
      color: "text-emerald-400",
    },
    {
      title: "Relational Persistence & Indexing",
      desc: "Optimized schemas, write-heavy indexing, and connection tuning in PostgreSQL and MySQL with Hibernate/JPA.",
      icon: Database,
      color: "text-cyan-400",
    },
    {
      title: "Secured Zero-Trust Auth (JWT/OAuth2)",
      desc: "Implementing stateless JWT token rotation, RBAC (Role-Based Access Control), and Spring Security filters.",
      icon: Shield,
      color: "text-purple-400",
    },
    {
      title: "Real-time Event Streaming & Logistics",
      desc: "High-frequency bidirectional WebSocket channels paired with Firebase Cloud Messaging (FCM) & Delhivery API webhooks.",
      icon: Zap,
      color: "text-amber-400",
    },
  ];

  return (
    <PageTransition variant="depthScale">
      <section className="min-h-[calc(100vh-80px)] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
            Engineering Identity
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-spring">{personalInfo.name}</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Translating complex business workflows into scalable, resilient backend architecture.
          </p>
        </div>

        {/* Bio Card + Resume CTA */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden space-y-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-5 relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              Professional Overview
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {personalInfo.bio}
            </p>
          </div>

          {/* Prominent Resume Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-sm text-slate-400 font-mono">
              Ready to review full credentials & career milestones?
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 text-slate-950 font-bold text-sm tracking-wide shadow-neon-spring flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </div>

        {/* Core Architectural Pillars */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Core Backend Engineering Focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all space-y-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-base">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pl-1">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
