<div align="center">

# 🌌 Hemant Kumar S — 3D Constellation Portfolio

**Lead Software Engineer · Civil Engineering Background · Full-Stack Innovator**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-00ffcc?style=for-the-badge)](https://s-hemant.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-S--Hemant-181717?style=for-the-badge&logo=github)](https://github.com/S-Hemant)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/hemantskumar)
[![Email](https://img.shields.io/badge/Email-hemantkumars.work@gmail.com-EA4335?style=for-the-badge&logo=gmail)](mailto:hemantkumars.work@gmail.com)

<br/>

> *"An immersive 3D universe where every project is a star — explore my work by navigating through an interactive constellation."*

<br/>

![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222?style=flat-square&logo=github-pages)

</div>

---

## ✨ What Is This?

This is not your average portfolio. It's a **fully interactive 3D space environment** built with React Three Fiber, where each of my projects floats as a glowing constellation node in a star-filled universe.

- 🪐 **Click a planet** to explore a project's full detail overlay
- 🎮 **Orbit & zoom** freely with mouse / touch controls
- 👨‍🚀 **Animated characters** respond to project type — astronaut for tech, civil engineer for construction
- 🌟 **Ambient post-processing** — noise grain, vignette, and dynamic lighting for a cinematic feel

---

## 🛸 Featured Projects

### 💻 Software Engineering

| Project | Description | Tech Stack |
|---|---|---|
| **R&D Pulse.AI** — *Sanofi* | AI agent for Sanofi's internal R&D team — query and build customizable dashboards on past, ongoing & future projects and medicines | React · TypeScript · Python · Node · AWS Bedrock · RAG · GenAI |
| **CAQH** | Dynamic user dashboard with real-time rendering driven by admin-configured JSON | React · TypeScript · Azure Blob · .NET |
| **AllState** | Insurance availability platform for auto, property, digital & collectables — serving individuals, families & groups | React · JavaScript · Java · Spring Boot · Jenkins · Datadog |

### 🏗️ Civil Engineering

| Project | Description | Skills Used |
|---|---|---|
| **Shiv Construction** — *Tata Steel* | Star vendor for Tata Steel — construction & maintenance of residential quarters and industrial buildings | Site Engineering · Manpower Management · Billing & Estimation |
| **Shiv Construction** — *Valley View School* | Primary and pre-primary school building construction end-to-end | Site Inspection · Structural Design · Project Management |
| **M/s Sai Construction** — *Railway TSS* | Railway Traction Sub-Station (TSS) construction in Dhutra & Garposh, Odisha — foundations for towers, sub-stations, transformers, power lines & control rooms | Civil Engineering · Electrical Infrastructure · Site Inspection |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (Static Export) |
| **3D Engine** | React Three Fiber + Three.js |
| **3D Helpers** | @react-three/drei (OrbitControls, Environment) |
| **Post-Processing** | @react-three/postprocessing (Noise, Vignette) |
| **Animations** | GSAP, Lottie React |
| **Styling** | Tailwind CSS v4 |
| **Language** | TypeScript |
| **Deployment** | GitHub Pages via GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/S-Hemant/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000/Portfolio](http://localhost:3000/Portfolio) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static `out/` directory suitable for GitHub Pages or any static host.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── planets/          # Planet/project images
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout & metadata
│   │   └── page.tsx      # Entry page (Scene + Overlay)
│   └── components/
│       ├── Canvas/
│       │   ├── Scene.tsx             # 3D canvas & all constellation nodes
│       │   ├── ConstellationNode.tsx # Individual glowing planet node
│       │   ├── StarsBackground.tsx   # Procedural star field
│       │   └── PlanetOverlay.tsx     # Detail panel on node click
│       └── UI/
│           ├── Overlay.tsx                  # HUD & navigation hints
│           ├── AstronautMatrixAnimation.tsx # Animation for tech projects
│           └── CivilEngineerAnimation.tsx   # Animation for civil projects
├── .github/workflows/deploy.yml  # CI/CD pipeline for GitHub Pages
└── next.config.ts                # Static export + basePath config
```

---

## 🎨 Design Highlights

- **Deep space color palette** — rich navy `#050a15` base with neon accent colors per project type
- **Constellation lines** connecting related project nodes
- **Responsive & performant** — adaptive DPR rendering (`[1, 1.5]`) with performance floor (`min: 0.5`)
- **Smooth camera damping** — `dampingFactor: 0.05` for silky orbit controls
- **Contextual character animations** — astronaut coding for IT projects; civil engineer for construction projects

---

## 📦 Deployment

This site is auto-deployed to **GitHub Pages** on every push to `main` using GitHub Actions.

**Live URL:** [https://s-hemant.github.io/Portfolio/](https://s-hemant.github.io/Portfolio/)

---

## 📬 Contact

| Channel | Details |
|---|---|
| 📧 Email | [hemantkumars.work@gmail.com](mailto:hemantkumars.work@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/hemantskumar](https://www.linkedin.com/in/hemantskumar) |
| 🐙 GitHub | [github.com/S-Hemant](https://github.com/S-Hemant) |
| 📞 Phone | +91 8117832556 |

---

<div align="center">

Made with ❤️ and Three.js by **Hemant Kumar S**

*"Bridging software engineering and civil engineering — one star at a time."*

</div>
