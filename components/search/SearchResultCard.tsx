import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchResultCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  title,
  author,
  imageUrl,
}) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(400).springify()}
      style={styles.container}
    >
      <Pressable style={styles.content}>
        <Animated.Image
          entering={ZoomIn.duration(500)}
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            by {author}
          </Text>
          <View style={styles.statsContainer}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>4.5</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.listeners}>10.2k listeners</Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  content: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  dot: {
    marginHorizontal: 6,
    color: '#666',
  },
  listeners: {
    fontSize: 14,
    color: '#666',
  },
}); 