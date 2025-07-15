/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "main-bg": "#101012",
        "card-bg": "#1E1E1E",
        "icon-bg": "#3E444B",
        "all-white": "#FFFFFF",
        "text-body": "#A3A3A3",
        "text-heading": "#F5F5F5",
        "active-accent-light": "#D2DFFF",
        "active-accent-dark": "#345177",
        "blue-accent": "#0057FF",
        "green-accent": "#00C853",
        "red-accent": "#DD2C00",
        "yellow-accent": "#FFD600",
        // Light Theme Colors
        "light-bg": "#F9FAFB", // gray-50
        "light-card-bg": "#FFFFFF",
        "light-text-body": "#6B7280", // gray-500
        "light-text-heading": "#111827", // gray-900
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "glowing-dark":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(0,87,255,0.3), transparent), radial-gradient(ellipse 80% 50% at 50% 120%,rgba(34,211,238,0.2), transparent)",
        "glowing-light":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(0,87,255,0.08), transparent), radial-gradient(ellipse 80% 50% at 50% 120%,rgba(56,189,248,0.08), transparent)",
      },
      animation: {
        "background-pan": "background-pan 10s ease-in-out infinite",
        glow: "glow 20s linear infinite",
      },
      keyframes: {
        "background-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
