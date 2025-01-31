import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  title: string;
  index: number;
  onPress: () => void;
  isSelected?: boolean;
};

export const CategoryItem = ({ title, index, onPress, isSelected = false }: Props) => {
  const colorScheme = useColorScheme();
  
  return (
    <Animated.View entering={FadeInRight.delay(index * 100)}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: isSelected 
              ? Colors[colorScheme ?? 'light'].tint 
              : Colors[colorScheme ?? 'light'].background,
            borderColor: Colors[colorScheme ?? 'light'].tint,
          },
        ]}>
        <ThemedText
          style={[
            styles.text,
            isSelected && { color: Colors[colorScheme ?? 'light'].background },
          ]}>
          {title}
        </ThemedText>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
}); 