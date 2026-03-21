/** @type {import('tailwindcss').Config} */
module.exports = {
  // O NativeWind v4 precisa do preset para processar os estilos nativos
  presets: [require("nativewind/preset")],
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
