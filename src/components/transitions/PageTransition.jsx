import React from "react";
import { motion } from "framer-motion";

const variantsMap = {
  // Hero / Default: Smooth upward float with blur clear
  fadeUp: {
    initial: { opacity: 0, y: 30, filter: "blur(8px)" },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -25, 
      filter: "blur(6px)",
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } 
    },
  },

  // About: Perspective scale & depth push
  depthScale: {
    initial: { opacity: 0, scale: 0.94, filter: "blur(10px)" },
    animate: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.04, 
      filter: "blur(8px)",
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } 
    },
  },

  // Skills: Cyber diagonal slide with subtle tilt
  diagonalSlide: {
    initial: { opacity: 0, x: -35, y: 15, filter: "blur(6px)" },
    animate: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] } 
    },
    exit: { 
      opacity: 0, 
      x: 35, 
      y: -15, 
      filter: "blur(6px)",
      transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] } 
    },
  },

  // Projects: Dynamic 3D card unfold
  cardUnfold: {
    initial: { opacity: 0, y: 40, scale: 0.96 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } 
    },
  },

  // Contact / Certifications: Gentle glow zoom
  glowZoom: {
    initial: { opacity: 0, scale: 0.92, filter: "blur(12px)" },
    animate: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      filter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeIn" } 
    },
  },
};

export default function PageTransition({ children, variant = "fadeUp" }) {
  const selectedVariant = variantsMap[variant] || variantsMap.fadeUp;

  return (
    <motion.div
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      exit={selectedVariant.exit}
      className="w-full flex-grow flex flex-col justify-center"
    >
      {children}
    </motion.div>
  );
}
