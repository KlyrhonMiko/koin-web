# KOIN Web

A modern, minimal, and highly interactive landing website for **KOIN** — a personal finance tracking mobile application, built with Next.js, Framer Motion, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

## Overview

This repository contains the source code for the official landing website of **KOIN**, an intuitive and beautifully designed personal finance tracker. The website serves as a feature showcase and distribution hub, presenting an immersive interactive preview of the mobile app with smooth 3D tilt effects, ambient glows, fluid animations, and direct access to app downloads and source repositories.

## Key Features

- **3D Parallax Hero**: Dynamic mouse-following 3D perspective tilt effect featuring floating financial cards and UI previews.
- **Fluid Animations**: Sophisticated scroll reveals, dynamic glowing backdrops, and interactive micro-animations powered by Framer Motion and GSAP.
- **Smooth Scrolling**: Implemented with Lenis for a luxury, frictionless browsing experience.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS v4 and optimized for mobile, tablet, and desktop screens.
- **Dark/Light Mode**: Seamless theme switching supported by `next-themes` with custom theme toggle controls.
- **Portfolio Reveal Integration**: Custom transition modal linking seamlessly back to the main portfolio.
- **Direct Downloads**: Immediate download link for the latest APK release and direct links to the Flutter mobile application repository.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/KlyrhonMiko/koin-web.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/components`: Reusable UI elements (`Hero`, `Features`, floating `Navbar`, `Footer`, `ThemeToggle`, `PortfolioReveal`).
- `/src/app`: Next.js App Router root layout, global CSS, and main page structure.
- `/public`: Static assets, favicons, and branding logos.

## Related Project

- **[KOIN Mobile App](https://github.com/KlyrhonMiko/koin)**: The core Flutter-based personal finance management application featuring local SQLite storage, multi-account tracking, dynamic dashboards, and smart budgets.
