# Portfolio

A high-performance, interactive portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed with **Glassmorphism** aesthetics and engineered using **SOLID principles** for maintainability.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## 📂 Project Structure

The project follows a modular architecture to separate concerns (Single Responsibility Principle).

```text
portfolio-2025/
├── public/                 # Static assets (images, profile.jpg)
├── app/
│   ├── globals.css         # Global styles & Tailwind directives
│   ├── layout.tsx          # Root layout (Fonts, Background Mesh)
│   └── page.tsx            # Main page composition
├── src/components/
│   │   ├── sections/       # Major page sections (Business Logic + UI)
│   │   │   ├── Hero.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Achievements.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── ui/             # Reusable atomic components
│   │       ├── FloatingMenu.tsx
│   │       └── ...
│   │
│   └── hooks/              # Custom React hooks (if needed)
│
├── tailwind.config.ts      # Theme customization (Colors, Fonts)
└── package.json            # Dependencies
```