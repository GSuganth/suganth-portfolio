import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Twitter, 
  Youtube, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare
} from "lucide-react";
import PageTransition from "../components/transitions/PageTransition";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: personalInfo.socialLinks.linkedin,
      color: "hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10",
      desc: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: Github,
      url: personalInfo.socialLinks.github,
      color: "hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10",
      desc: "Source Repositories",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      url: personalInfo.socialLinks.twitter,
      color: "hover:text-[#1da1f2] hover:border-[#1da1f2]/50 hover:bg-[#1da1f2]/10",
      desc: "Tech Updates & Thoughts",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: personalInfo.socialLinks.instagram,
      color: "hover:text-[#e4405f] hover:border-[#e4405f]/50 hover:bg-[#e4405f]/10",
      desc: "Life Behind the Terminal",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: personalInfo.socialLinks.youtube,
      color: "hover:text-[#ff0000] hover:border-[#ff0000]/50 hover:bg-[#ff0000]/10",
      desc: "Tutorials & Tech Talks",
    },
  ];

  return (
    <PageTransition variant="glowZoom">
      <section className="min-h-[calc(100vh-80px)] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
            Let's Collaborate
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-spring">Touch</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Available for Java Spring Boot roles, microservice consulting, contract projects, and architecture discussions.
          </p>
        </div>

        {/* Primary Email Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden text-center space-y-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Initiate Direct Correspondence
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Drop an email to discuss your next backend project or employment opportunity.
            </p>
          </div>

          {/* Action Buttons: Email Me & Copy Email */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
            <a
              href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20-%20Java%20Spring%20Boot`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm tracking-wide shadow-neon-spring transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>Email Me ({personalInfo.email})</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-4 rounded-xl glass-panel hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Animated Social Icons Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white">
              Connect Across Social Channels
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Follow development journey, tech articles, and community insights
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-5 rounded-2xl glass-panel border border-white/10 flex flex-col items-center justify-center gap-2.5 text-slate-300 transition-all group ${social.color}`}
                >
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-semibold">{social.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
