import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: true,
    themes: [
      {
        binesai_theme: {
          primary: "#dc2626",
          "primary-content": "#ffd9d4",
          secondary: "#fcd34d",
          "secondary-content": "#161002",
          accent: "#d1d5db",
          "accent-content": "#101011",
          neutral: "#2d1e14",
          "neutral-content": "#d1cdca",
          "base-100": "#26262b",
          "base-200": "#202024",
          "base-300": "#19191d",
          "base-content": "#cfcfd0",
          info: "#2592ff",
          "info-content": "#000816",
          success: "#00ac00",
          "success-content": "#000b00",
          warning: "#f97316",
          "warning-content": "#150500",
          error: "#be123c",
          "error-content": "#f8d5d6",
        },
      },
      "cmyk",
    ],
  },
};
