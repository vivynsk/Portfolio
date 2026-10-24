# 🎮 Vivyn SK — Game Developer & VR Portfolio

[![GitHub Pages Deployment](https://github.com/your-username/your-repo/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/your-repo/actions/workflows/deploy.yml)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, retro-futuristic game developer and VR specialist portfolio featuring interactive video showcases, custom HUD aesthetics, dynamic sound effects, and responsive design.

---

## 🌟 Overview

This portfolio showcases selected projects, immersive simulations, and game design explorations by **Vivyn SK** — a Computer Science & Design student passionate about virtual reality, Unreal Engine, Unity, 3D world-building, and cinematic visual design.

---

## 🕹️ Featured Quests (Projects)

| # | Project | Category | Engine / Tools | Description |
|---|---------|----------|----------------|-------------|
| **01** | **STAY MAD** | Games | Unity, C#, Game Design | A humorous rage-bait game where collecting coins triggers unexpected traps and playful surprises. |
| **02** | **STAR WARS CINEMATIC VISUAL** | Cinematic | Blender, Unreal Engine | Atmospheric cinematic experiment exploring scene composition, lighting, and fan-inspired visuals. |
| **03** | **ECHOES OF HERITAGE** | Games | Unreal Engine, 3D Design | An educational game concept bringing history to life through interactive exploration and historical environments. |

---

## ⚡ Known Loadout (Skills)

- **Game Development:** Unity, Unreal Engine, C# for Unity
- **VR + Immersive Experiences:** VR Development, Interactive VR Environments, Immersive Experience Design
- **3D + Environment Design:** Blender, 3D Environment Design, Level Design, Lighting & Scene Composition
- **Creative Design:** Figma, Canva, UI/UX Design, Visual Design, Cinematic Visual Design

---

## 🚀 Tech Stack & Design Features

- **Frontend:** React 19 + Vite
- **Styling:** Vanilla CSS with custom theme variables, glowing accents, and scanline overlays
- **Media:** Built-in interactive custom video players with progress scrubbers and fullscreen controls
- **Audio:** Web Audio API synth sounds for interface interactions
- **Deployment:** GitHub Pages via automated GitHub Actions CI/CD

---

## 📁 Project Structure

```text
V_portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── dist/                       # Production build directory (ready to host)
│   ├── assets/                 # Videos, images, compiled JS & CSS
│   ├── resume/                 # Resume PDF
│   └── index.html              # Standalone production HTML entry
├── src/
│   ├── main.jsx                # Main application component & data
│   └── styles.css              # Custom design system & HUD styling
├── .gitignore                  # Git ignore rules
├── index.html                  # Vite development template
├── package.json                # Project dependencies & scripts
├── README.md                   # Project documentation
└── vite.config.js              # Vite configuration
```

---

## 🛠️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *(On Windows PowerShell, you can also run `npm.cmd run dev`)*

4. Open your browser at **`http://localhost:5173/`**.

---

## 🌐 Deployment

### Option A: Deploy to Vercel (Recommended)

1. **Via GitHub & Vercel Dashboard:**
   - Push your code to your GitHub account:
     ```bash
     git push -u origin main
     ```
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New** > **Project**.
   - Import your GitHub repository.
   - Framework preset is automatically detected as **Vite**.
   - Click **Deploy**. Your site will be live on a custom `.vercel.app` domain in seconds!

2. **Via Vercel CLI (Direct from terminal, no GitHub needed):**
   ```bash
   npx vercel
   ```
   Follow the CLI prompts to deploy directly.

---

### Option B: Deploy to GitHub Pages

This project includes a GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for automated deployment:
1. Push your repository to GitHub:
   ```bash
   git push origin main
   ```
2. Navigate to your repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Your site will automatically build and publish at `https://<your-username>.github.io/<your-repo-name>/`.

---

## 📬 Contact & Connect

- **Email:** [vivynsk18@gmail.com](mailto:vivynsk18@gmail.com)
- **LinkedIn:** [Vivyn SK](https://www.linkedin.com/in/vivyn-s-k-75ab34380/)
- **WhatsApp:** [+91 8531959904](https://wa.me/918531959904)

---

© 2026 Vivyn SK — Built with curiosity.
