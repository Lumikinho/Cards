console.log("[TAILWIND] Carregando tailwind.config.js...");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

console.log("[TAILWIND] Configuração do Tailwind v4 carregada.");
