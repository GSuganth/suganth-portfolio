# Suganthan G - Java Spring Boot Developer Portfolio 🚀

A high-performance, dark-themed, 3D interactive portfolio website engineered for **Suganthan G** (Java Spring Boot Developer).

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Animations & Routing**: Framer Motion with seamless `AnimatePresence` transitions
- **3D Graphics**: Three.js + React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Interactive Particles**: `@tsparticles/react` + `@tsparticles/slim`
- **Styling**: Tailwind CSS with custom glowing blur effects and glassmorphism
- **Icons**: Lucide React

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure
```
├── public/                 # Static assets (favicons, resume PDF)
├── src/
│   ├── components/
│   │   ├── canvas/         # Three.js (Hero3DCanvas) & tsparticles (ParticleBackground)
│   │   ├── common/         # 3D Tilt ProjectCard
│   │   ├── layout/         # Glassmorphic Navbar & Footer
│   │   └── transitions/    # Framer Motion PageTransition wrapper
│   ├── data/               # Central portfolio data (Resume content, skills, projects)
│   ├── pages/              # Hero, About, Skills, Projects, Certifications, Contact
│   ├── App.jsx             # Master shell with glowing blurs & AnimatePresence
│   ├── main.jsx            # React root & BrowserRouter
│   └── index.css           # Custom scrollbars, glass filters, text gradients
├── tailwind.config.js      # Glow colors, keyframes, blob animations
└── vite.config.js          # Vite config with alias support
```
