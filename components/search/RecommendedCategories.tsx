import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Business', icon: 'briefcase', type: 'FontAwesome5' },
  { id: 2, name: 'Personal', icon: 'user', type: 'FontAwesome5' },
  { id: 3, name: 'Music', icon: 'music', type: 'FontAwesome5' },
  { id: 4, name: 'Photography', icon: 'camera', type: 'FontAwesome5' },
];

export const RecommendedCategories: React.FC = () => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Animated.View
          key={category.id}
          entering={FadeInDown.delay(index * 100).springify()}
          style={styles.categoryContainer}
        >
          <Pressable style={styles.category}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name={category.icon} size={24} color="#1a1a1a" />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </Pressable>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  categoryContainer: {
    width: '48%',
    marginBottom: 16,
  },
  category: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    textAlign: 'center',
  },
}); 