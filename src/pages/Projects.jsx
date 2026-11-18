import React from "react";
import PageTransition from "../components/transitions/PageTransition";
import ProjectCard from "../components/common/ProjectCard";
import { projectsData } from "../data/portfolioData";
import { Sparkles, Terminal } from "lucide-react";

export default function Projects() {
  return (
    <PageTransition variant="cardUnfold">
      <section className="min-h-[calc(100vh-80px)] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
            Featured Engineering
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient-spring">Projects</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Interactive showcase of enterprise systems featuring real-time WebSockets, microservices architectures, third-party logistics, and automated payment gateways.
          </p>
          <div className="pt-1">
            <span className="text-[11px] font-mono text-slate-400/80 bg-slate-900/80 px-3 py-1 rounded-full border border-white/10">
              💡 Hover on desktop to experience dynamic 3D tilt & glare physics
            </span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
