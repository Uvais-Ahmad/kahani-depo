import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;

type Props = {
  id: string;
  imageUrl: string;
  index: number;
};

export const RecommendedCard = ({ id, imageUrl, index }: Props) => {
  const colorScheme = useColorScheme();

  return (
    <Link href={`/(tabs)/book/${id}`} asChild>
      <TouchableOpacity>
        <Animated.View 
          entering={FadeInUp.delay(index * 100).springify()}
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
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    marginRight: 16,
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
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
    borderRadius: 12,
  },
}); 