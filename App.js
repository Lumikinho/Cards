import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import React from 'react';

export default function App() {
  return (
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
        <Text className="mt-8 text-zinc-500 font-bold">NativeWind v4 Estável</Text>
      </View>
    </View>
  );
}
