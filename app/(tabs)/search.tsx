import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { SearchBar } from '../../components/search/SearchBar';
import { SearchHistoryCard } from '@/components/search/SearchHistoryCard';
import { RecommendedCategories } from '@/components/search/RecommendedCategories';
import { SearchResultCard } from '@/components/search/SearchResultCard';

const { width } = Dimensions.get('window');

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          {!searchQuery ? (
            <>
              <Text style={styles.sectionTitle}>Recent Searches</Text>
              <SearchHistoryCard
                title="The Psychology of Money"
                author="Morgan Housel"
                imageUrl="https://m.media-amazon.com/images/I/71TRUbzcvaL._AC_UF1000,1000_QL80_.jpg"
              />
              <SearchHistoryCard
                title="Atomic Habits"
                author="James Clear"
                imageUrl="https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg"
              />
              
              <View style={styles.categoriesContainer}>
                <Text style={styles.sectionTitle}>Recommended Categories</Text>
                <RecommendedCategories />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Search Results</Text>
              <SearchResultCard
                title="The Psychology of Money"
                author="Morgan Housel"
                imageUrl="https://m.media-amazon.com/images/I/71TRUbzcvaL._AC_UF1000,1000_QL80_.jpg"
              />
              <SearchResultCard
                title="Atomic Habits"
                author="James Clear"
                imageUrl="https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg"
              />
            </>
          )}
        </Animated.View>
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 16,
    color: '#1a1a1a',
  },
  categoriesContainer: {
    marginTop: 24,
  },
}); 