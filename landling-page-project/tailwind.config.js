// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0060a9",
        "primary-dark": "#004b82",   // a darker shade for hover
        "primary-light": "#4a94d4",  // lighter shade for accents if needed

        secondary: "#4a5d03",
        "secondary-dark": "#7e9e0a", // darker shade for hover
        "secondary-light": "#c0e040", // lighter for accents

        neutral: "#f5f5f5",          // light background / sections
        "neutral-dark": "#333333",   // dark text or overlays
      },
    },
  },
  plugins: [],
};
