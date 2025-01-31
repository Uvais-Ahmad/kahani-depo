import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';
import { IconSymbol } from './ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import Animated, { FadeIn } from 'react-native-reanimated';

export const Header = () => {
  const colorScheme = useColorScheme();

  return (
    <Animated.View 
      entering={FadeIn.duration(500)}
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? 'light'].background }
      ]}
    >
      <Image
        source={require('../assets/images/icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.settingsButton}>
          <IconSymbol 
            name="gear" 
            size={24} 
            color={Colors[colorScheme ?? 'light'].text}
          />
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  logo: {
    height: 32,
    width: 120,
  },
  settingsButton: {
    padding: 8,
  },
}); 