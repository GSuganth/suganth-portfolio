import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Layers, CheckCircle, ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative rounded-2xl glass-panel p-6 sm:p-8 group transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl overflow-hidden"
    >
      {/* Dynamic Cursor Glare Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glareX} ${glareY}, rgba(52, 211, 153, 0.15), transparent 40%)`,
        }}
      />

      {/* Background Decorative Ambient Glow */}
      <div
        className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-20 pointer-events-none transition-transform group-hover:scale-125"
        style={{ background: project.glowColor }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 space-y-5">
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Layers className="w-3.5 h-3.5" />
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.metrics}
          </span>
        </div>

        {/* Project Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-emerald-400/90 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Architectural Features */}
        <div className="space-y-2.5 pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
            Key Engineering Highlights:
          </p>
          <ul className="space-y-2">
            {project.features.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="pt-2 flex flex-wrap gap-2">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 transition-colors group-hover:border-emerald-500/30"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
