import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Network, 
  Layers, 
  Database, 
  Wrench,
  Check
} from "lucide-react";
import PageTransition from "../components/transitions/PageTransition";
import { skillsData } from "../data/portfolioData";

const iconMap = {
  Code2,
  Server,
  Network,
  Layers,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <PageTransition variant="diagonalSlide">
      <section className="min-h-[calc(100vh-80px)] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
            Technical Arsenal
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-spring">Capabilities</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Categorized overview of backend frameworks, database architectures, real-time protocols, and enterprise integrations.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon] || Server;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Ambient Card Glow */}
                <div 
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ background: category.glow }}
                />

                <div className="space-y-4 relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 text-slate-200 border border-slate-700/60 hover:border-emerald-400/50 hover:text-white transition-colors"
                      >
                        <Check className="w-3 h-3 text-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Count */}
                <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Proficiency: Production Ready</span>
                  <span className="text-emerald-400">{category.skills.length} competencies</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
}
