/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#040711',
        surface: {
          DEFAULT: '#0b1120',
          light: '#131d33',
          card: 'rgba(15, 23, 42, 0.65)',
        },
        spring: {
          400: '#34d399',
          500: '#10b981',
          neon: '#00ff88',
        },
        cyber: {
          blue: '#00d2ff',
          indigo: '#6366f1',
          violet: '#a855f7',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'glow-radial': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'neon-spring': '0 0 25px -5px rgba(0, 255, 136, 0.35)',
        'neon-cyan': '0 0 25px -5px rgba(0, 210, 255, 0.35)',
        'neon-purple': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'blob': 'blob 10s infinite alternate ease-in-out',
        'blob-slow': 'blob 15s infinite alternate-reverse ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.15)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
