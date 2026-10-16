# NEXORA — Where Innovation Begins
> **An Interactive Journey Into the Future of Technology**  
> First-Year BTech CSE College Assignment Project • GLA University, Mathura (Section: AN)  
> **Student Creator:** Tanishk Shukla  
> **LinkedIn:** [https://www.linkedin.com/in/tanishk-shukla-399682357/](https://www.linkedin.com/in/tanishk-shukla-399682357/)  
> **Suggested Deployment Slug:** `tanishk-shukla-an-nexora`

---

## 1. Project Overview

**NEXORA** is a futuristic technology discovery and innovation web application representing the beginning of a student engineer's journey into computer science and emerging tech.

Built using semantic HTML5, modern CSS3, vanilla JavaScript (ES6+), GSAP & ScrollTrigger, and Three.js, the project delivers 60 FPS cinematic motion graphics, full responsive layouts, and zero-backend client-side persistence.

### Key Sections:
- **Section A — Home:** Cinematic hero section with interactive 3D WebGL tech polyhedra, glowing orbital rings, floating telemetry chips, and call-to-actions.
- **Section B — Explore Technologies:** 6 deep-dive technology cards (AI, Robotics & IoT, Cloud Computing, Cybersecurity, Data Science, Web Development) with accessible modal dialogs detailing definitions, real-world applications, beginner skills, and starter project blueprints.
- **Section C — Innovation Lab:** Browser-based project idea generator with 3 filter dimensions (Category, Difficulty, Goal). Features clipboard copying, localStorage favorites persistence, and a slide-out saved ideas drawer.
- **Section D — Learning Roadmap:** 6-phase engineering trajectory from beginner to innovator. Allows tracking milestone completion with persistent progress calculation and celebration confetti.
- **Section E — About the Creator:** Authentic introduction for Tanishk Shukla (First-year BTech CSE, GLA University, Section AN) featuring an engineering trajectory timeline and the **Official LinkedIn integration button** (`https://www.linkedin.com/in/tanishk-shukla-399682357/`).
- **Section F — Contact & Footer:** Validated contact form with interactive mailto client dispatch, dynamic year, and back-to-top smooth scrolling.

---

## 2. Tech Stack

- **Markup & Layout:** HTML5 (Semantic, Accessible ARIA roles)
- **Styling:** Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Keyframes, Media Queries)
- **Programming:** Vanilla JavaScript (ES6+ Modules, LocalStorage, Web APIs)
- **Motion & 3D:** GSAP, ScrollTrigger, Three.js (WebGL with CSS graceful fallback), Canvas Confetti
- **Build Tool:** Vite

---

## 3. Getting Started Locally

### Prerequisites
- Node.js (v18+ or v20+ LTS recommended)
- npm

### Installation & Run

1. Open a terminal in the project directory:
   ```bash
   cd nexora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or the URL shown in terminal) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The static distribution files will be generated in `dist/`.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 4. Free Deployment Instructions

The production build in `dist/` uses relative paths (`./`) and is 100% compatible with:

### Vercel
1. Install Vercel CLI (`npm i -g vercel`) or import the project via GitHub at [vercel.com](https://vercel.com).
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Set project name: `tanishk-shukla-an-nexora`

### Netlify
1. Connect repository at [netlify.com](https://netlify.com) or drag-and-drop the `dist` folder into Netlify Drop.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set site name: `tanishk-shukla-an-nexora`

### GitHub Pages
1. Push project to a GitHub repository named `tanishk-shukla-an-nexora`.
2. Configure GitHub Actions workflow or deploy the `dist/` branch via Settings > Pages.

---

## 5. Creator Attribution

- **Name:** Tanishk Shukla
- **Institution:** GLA University, Mathura
- **Program:** BTech Computer Science & Engineering (Section: AN)
- **Tagline:** *"Exploring Technology. Learning Every Day. Building Tomorrow."*
- **LinkedIn Profile:** [https://www.linkedin.com/in/tanishk-shukla-399682357/](https://www.linkedin.com/in/tanishk-shukla-399682357/)
