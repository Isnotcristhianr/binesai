import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"], // Agrega la fuente personalizada
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: true,
    themes: [
      "autumn",
    ],
  },
};