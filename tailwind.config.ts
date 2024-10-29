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
        binesai_dark: {
          primary: "#CC0000", // Rojo
          "primary-content": "#ffd9d4", // Color claro para el contenido
          secondary: "#fcd34d", // Amarillo cobrizo
          "secondary-content": "#161002", // Color oscuro para el contenido secundario
          accent: "#d1d5db", // Color de acento
          "accent-content": "#101011", // Color de contenido de acento
          neutral: "#2d1e14", // Color neutral oscuro
          "neutral-content": "#d1cdca", // Contenido neutral claro
          "base-100": "#19191d", // Fondo oscuro
          "base-200": "#202024", // Fondo más oscuro
          "base-300": "#26262b", // Fondo más oscuro
          "base-content": "#cfcfd0", // Contenido claro
          info: "#2592ff", // Color de información
          "info-content": "#000816", // Contenido de información oscuro
          success: "#00ac00", // Color de éxito
          "success-content": "#000b00", // Contenido de éxito oscuro
          warning: "#f97316", // Color de advertencia
          "warning-content": "#150500", // Contenido de advertencia oscuro
          error: "#be123c", // Color de error
          "error-content": "#f8d5d6", // Contenido de error claro
        },
        binesai_light: {
          primary: "#CC0000", // Rojo
          "primary-content": "#ffd9d4", // Color claro para el contenido
          secondary: "#fcd34d", // Amarillo cobrizo
          "secondary-content": "#161002", // Color oscuro para el contenido secundario
          accent: "#d1d5db", // Color de acento
          "accent-content": "#101011", // Color de contenido de acento
          neutral: "#ffffff", // Color neutral claro (blanco)
          "neutral-content": "#2d1e14", // Contenido neutral oscuro (negro)
          "base-100": "#ffffff", // Fondo blanco
          "base-200": "#f0f0f0", // Fondo blanco más oscuro
          "base-300": "#e0e0e0", // Fondo gris claro
          "base-content": "#000000", // Contenido negro
          info: "#2592ff", // Color de información
          "info-content": "#ffffff", // Contenido de información blanco
          success: "#00ac00", // Color de éxito
          "success-content": "#ffffff", // Contenido de éxito blanco
          warning: "#f97316", // Color de advertencia
          "warning-content": "#ffffff", // Contenido de advertencia blanco
          error: "#be123c", // Color de error
          "error-content": "#000000", // Contenido de error negro
        },
      },
    ],
  },
};
