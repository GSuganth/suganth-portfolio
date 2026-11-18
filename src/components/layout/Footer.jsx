import React from "react";
import { personalInfo } from "../../data/portfolioData";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-8 mt-20 relative z-10 glass-panel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>
            © {new Date().getFullYear()} {personalInfo.name} • Java Spring Boot Developer
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>System Status: Microservices Healthy</span>
        </div>

        <div>
          <span>Crafted with React, Three.js & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
