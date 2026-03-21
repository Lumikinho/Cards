import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Loga no console para facilitar debug e monitoramento
    // Aqui voce pode integrar com Sentry/Crashlytics se quiser
    console.error('Erro capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View className="flex-1 bg-zinc-100 items-center justify-center p-6">
          <Text className="text-zinc-900 text-lg font-black mb-2">
            Opa! Algo deu errado.
          </Text>
          <Text className="text-zinc-500 text-sm text-center">
            Tente fechar e abrir o app novamente.
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <View className="flex-1 bg-zinc-100 items-center justify-center">
        <View className="items-center justify-center p-4">
          <View className="w-80 h-52 rounded-3xl bg-indigo-600 p-6 flex-row items-center shadow-2xl border border-indigo-500">
            <View className="flex-1">
              <Text className="text-white/60 text-[10px] font-bold uppercase tracking-[2px] mb-1">Membro Oficial</Text>
              <Text className="text-white text-2xl font-black mb-1">Manoel Gomes</Text>
              <Text className="text-indigo-200 text-xs font-medium mb-4">@caneta_azul</Text>
              <View className="mt-auto">
                <Text className="text-white/40 text-[9px] uppercase tracking-widest">ID de Registro</Text>
                <Text className="text-white font-mono text-sm">MG-2026-9988</Text>
              </View>
            </View>
            <View className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden bg-indigo-800">
              <Image 
                source={{ uri: 'https://github.com/github.png' }} 
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </View>
          <Text className="mt-8 text-zinc-500 font-bold">NativeWind v4 Estavel</Text>
        </View>
      </View>
    </ErrorBoundary>
  );
}