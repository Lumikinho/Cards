import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import "./global.css";
import App from './App';

console.log("[LOG] index.js carregado com sucesso.");
console.log("[LOG] Gesture Handler e Global CSS importados.");

registerRootComponent(App);
