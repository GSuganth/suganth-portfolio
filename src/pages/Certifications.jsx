import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink, Github, Linkedin, BookOpen, Terminal } from "lucide-react";
import PageTransition from "../components/transitions/PageTransition";
import { certificationsData, personalInfo } from "../data/portfolioData";

export default function Certifications() {
  return (
    <PageTransition variant="glowZoom">
      <section className="min-h-[calc(100vh-80px)] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
            Accreditations & Articles
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient-spring">Profiles</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Verified technical certifications, engineering profiles, and continuous architectural research.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-400" />
            Verified Professional Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      Verified
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-400/90 font-mono mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Credential Status</span>
                  <span className="text-emerald-400">Complete ✓</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coding Profiles & Technical Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Coding Profiles */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                Coding & Engineering Profiles
              </h3>
              <p className="text-sm text-slate-400">
                Explore source code repositories, commits, and professional endorsements.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      LinkedIn Profile
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      linkedin.com/in/suganthan-g
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      GitHub Repositories
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      Open source backend code & microservice demos
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Featured Technical Insights */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Featured Architectural Topics
              </h3>
              <p className="text-sm text-slate-400">
                Core design patterns and deep dives implemented in production.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold">1. Real-Time WebSockets vs Polling</span>
                <p className="text-slate-300 font-sans text-xs">
                  How duplex WebSocket sessions reduced message dispatch latency by 85% in fleet tracking.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
                <span className="text-cyan-400 font-bold">2. Idempotent Payment Webhooks</span>
                <p className="text-slate-300 font-sans text-xs">
                  Zero-duplicate order confirmation strategies utilizing transactional outbox patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
