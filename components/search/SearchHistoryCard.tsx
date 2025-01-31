import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchHistoryCardProps {
  title: string;
  author: string;
  imageUrl: string;
}

export const SearchHistoryCard: React.FC<SearchHistoryCardProps> = ({
  title,
  author,
  imageUrl,
}) => {
  return (
    <Animated.View
      entering={FadeInRight.duration(400)}
      style={styles.container}
    >
      <Pressable style={styles.content}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.author} numberOfLines={1}>
            {author}
          </Text>
        </View>
        <MaterialIcons name="history" size={24} color="#666" />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
}); 