console.log("[METRO] Inicializando metro.config.js...");

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

console.log("[METRO] Carregando default config do Expo...");
const config = getDefaultConfig(__dirname);

console.log("[METRO] Injetando wrapper do NativeWind v4...");
module.exports = withNativeWind(config, { input: "./global.css" });
