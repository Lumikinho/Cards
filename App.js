import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import React from 'react';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate, Extrapolation } from 'react-native-reanimated';
import { styled } from 'nativewind';

// No NativeWind v4, criamos versões "estilizadas" dos componentes animados
const StyledAnimatedView = styled(Animated.View);
const StyledView = styled(View);
const StyledText = styled(Text);

const Card = () => {
  const rotation = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      rotation.value = event.translationX / 1.5;
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > 120) {
        rotation.value = withSpring(rotation.value > 0 ? 180 : -180);
      } else {
        rotation.value = withSpring(0);
      }
    });

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [-180, 0, 180], [180, 0, -180], Extrapolation.CLAMP);
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotateY}deg` }],
      opacity: Math.abs(rotation.value) < 90 ? 1 : 0,
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [-180, 0, 180], [0, -180, 0], Extrapolation.CLAMP);
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotateY}deg` }],
      opacity: Math.abs(rotation.value) >= 90 ? 1 : 0,
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <StyledView className="items-center justify-center p-4">
        <StyledView className="w-80 h-52">
          {/* FRENTE */}
          <StyledAnimatedView 
            className="absolute inset-0 rounded-3xl bg-indigo-600 p-6 flex-row items-center shadow-2xl border border-indigo-500"
            style={frontAnimatedStyle}
          >
            <StyledView className="flex-1">
              <StyledText className="text-white/60 text-[10px] font-bold uppercase tracking-[2px] mb-1">Membro Oficial</StyledText>
              <StyledText className="text-white text-2xl font-black mb-1">Manoel Gomes</StyledText>
              <StyledText className="text-indigo-200 text-xs font-medium mb-4">@caneta_azul</StyledText>
              <StyledView className="mt-auto">
                <StyledText className="text-white/40 text-[9px] uppercase tracking-widest">ID de Registro</StyledText>
                <StyledText className="text-white font-mono text-sm">MG-2026-9988</StyledText>
              </StyledView>
            </StyledView>
            <StyledView className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden bg-indigo-800">
              <Image 
                source={{ uri: 'https://github.com/github.png' }} 
                style={{ width: '100%', height: '100%' }}
              />
            </StyledView>
          </StyledAnimatedView>

          {/* VERSO */}
          <StyledAnimatedView 
            className="absolute inset-0 rounded-3xl bg-zinc-900 p-6 items-center justify-center shadow-2xl border border-zinc-800"
            style={backAnimatedStyle}
          >
            <StyledView className="bg-white p-3 rounded-2xl shadow-lg">
              <StyledView className="w-28 h-28 border-4 border-black flex-wrap flex-row">
                {[...Array(64)].map((_, i) => (
                  <StyledView 
                    key={i} 
                    className={`w-3.5 h-3.5 ${Math.random() > 0.4 ? 'bg-black' : 'bg-white'}`} 
                  />
                ))}
              </StyledView>
            </StyledView>
            <StyledText className="text-zinc-500 text-[10px] mt-4 font-bold tracking-widest uppercase">Escaneie para validar</StyledText>
          </StyledAnimatedView>
        </StyledView>
      </StyledView>
    </GestureDetector>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#f4f4f5', alignItems: 'center', justifyContent: 'center' }}>
      <Card />
    </GestureHandlerRootView>
  );
}
