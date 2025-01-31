import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <Animated.View 
        entering={FadeInUp.duration(500)}
        style={styles.content}
      >
        <ThemedText style={styles.title}>Search</ThemedText>
        {/* Add your search functionality here */}
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
}); 