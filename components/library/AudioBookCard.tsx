import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { 
  FadeIn,
  SlideInRight,
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  withSequence
} from 'react-native-reanimated';

interface AudioBookCardProps {
  title: string;
  duration: string;
  isPlaying?: boolean;
  onPress: () => void;
}

export default function AudioBookCard({ 
  title, 
  duration, 
  isPlaying = false,
  onPress 
}: AudioBookCardProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    };
  });

  const handlePress = () => {
    scale.value = withSequence(
      withSpring(0.95),
      withSpring(1)
    );
    onPress();
  };

  return (
    <Animated.View
      entering={FadeIn.delay(200).springify()}
      style={[styles.container, animatedStyle]}
    >
      <TouchableOpacity 
        style={styles.content}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <Ionicons 
            name={isPlaying ? "pause-circle" : "play-circle"} 
            size={40} 
            color="#6200ee" 
          />
        </View>
        
        <View style={styles.textContainer}>
          <Animated.Text 
            style={styles.title}
            entering={SlideInRight.delay(300)}
            numberOfLines={1}
          >
            {title}
          </Animated.Text>
          <Animated.Text 
            style={styles.duration}
            entering={SlideInRight.delay(400)}
          >
            {duration}
          </Animated.Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 16,
  },
}); 