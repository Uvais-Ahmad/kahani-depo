import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  listeners: number;
  index: number;
};

export const BestSellerCard = ({ id, title, imageUrl, rating, listeners, index }: Props) => {
  const colorScheme = useColorScheme();
  const tintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <Link href={`/(tabs)/book/${id}`} asChild>
      <TouchableOpacity>
        <Animated.View 
          entering={FadeInLeft.delay(index * 100).springify()}
          style={[
            styles.container,
            { backgroundColor: Colors[colorScheme ?? 'light'].background }
          ]}
        >
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.content}>
            <ThemedText style={styles.title} numberOfLines={2}>
              {title}
            </ThemedText>
            <View style={styles.ratingContainer}>
              <MaterialIcons name="star" size={16} color={tintColor} />
              <ThemedText style={[styles.rating, { color: tintColor }]}>
                {rating.toFixed(1)}
              </ThemedText>
            </View>
            <View style={styles.listenersContainer}>
              <MaterialIcons name="headset" size={16} color={tintColor} />
              <ThemedText style={styles.listeners}>
                {listeners.toLocaleString()} listeners
              </ThemedText>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  listenersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listeners: {
    marginLeft: 4,
    fontSize: 12,
    opacity: 0.7,
  },
}); 