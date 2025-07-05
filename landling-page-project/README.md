# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Overview
This is a React-based frontend project styled using Tailwind CSS and Node.js .  It includes key sections like hero banners, navigation menus, testimonials, service offerings, and partner listings.

# 🛠️ Tech Stack
- React (Vite)
- Tailwind CSS
- React Router
- Swiper.js (for sliders)
- Lucide Icons
- Responsive Design (mobile-first)

🧩 Project Structure
src/
│
├── assets/               // Static images and fonts
├── components/           // Reusable UI components
│   ├── ui/               // Generic UI components like Button
│   ├── common/           // Reusable sections like SectionHeading
│   └── sections/         // Specific sections like Hero, Services, etc.
│
├── pages/                // Page-level components (e.g., Home.jsx)
├── App.jsx               // Main App component
└── main.jsx              // Entry point

♻️ Reusable Components
✅ Button.jsx

# 📐 Styling
  Tailwind CSS is used throughout for utility-first styling.
  Mobile responsiveness is ensured using Tailwind's responsive breakpoints.

  Consistent spacing, fonts, and colors are maintained via custom Tailwind config (if extended).



Component Reuse: Common patterns like buttons and section headers are abstracted.



📦 Getting Started
 ``bash 
 git clone https://github.com/purnimagurung/landing-page-project.git
