import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: !isMobile,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.6,
              color: "#34d399",
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: ["#10b981", "#06b6d4", "#6366f1", "#ffffff"],
        },
        links: {
          color: "#1e293b",
          distance: 130,
          enable: true,
          opacity: 0.35,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: isMobile ? 0.6 : 0.9,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 850,
          },
          value: isMobile ? 25 : 55,
        },
        opacity: {
          value: { min: 0.15, max: 0.6 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Particles
        id="tsparticles"
        className="w-full h-full pointer-events-auto"
        options={options}
      />
    </div>
  );
}
