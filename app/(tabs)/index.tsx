import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { SectionHeader } from '@/components/home/SectionHeader';
import { CategoryItem } from '@/components/home/CategoryItem';
import { RecommendedCard } from '@/components/home/RecommendedCard';
import { BestSellerCard } from '@/components/home/BestSellerCard';

// Mock data (replace with real data later)
const categories = [
  'Art', 'Business', 'Comedy', 'Drama', 'Education', 'Fiction', 'Health', 'History',
  'Kids', 'Music', 'Science', 'Technology'
];

const recommendedBooks = [
  { id: '1', imageUrl: 'https://picsum.photos/400/600' },
  { id: '2', imageUrl: 'https://picsum.photos/400/601' },
  { id: '3', imageUrl: 'https://picsum.photos/400/602' },
  { id: '4', imageUrl: 'https://picsum.photos/400/603' },
];

const bestSellers = [
  { 
    id: '1', 
    title: 'The Power of Habit',
    imageUrl: 'https://picsum.photos/200/200',
    rating: 4.8,
    listeners: 125000
  },
  { 
    id: '2', 
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits',
    imageUrl: 'https://picsum.photos/200/201',
    rating: 4.9,
    listeners: 250000
  },
  { 
    id: '3', 
    title: 'The Psychology of Money',
    imageUrl: 'https://picsum.photos/200/202',
    rating: 4.7,
    listeners: 180000
  },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Art');

  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Categories Section */}
        <SectionHeader title="Categories" />
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category, index) => (
            <CategoryItem
              key={category}
              title={category}
              index={index}
              isSelected={category === selectedCategory}
              onPress={() => setSelectedCategory(category)}
            />
          ))}
        </ScrollView>

        {/* Recommended Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Recommended For You" 
            showSeeMore 
            seeMoreLink="/recommended" 
          />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recommendedContainer}
          >
            {recommendedBooks.map((book, index) => (
              <RecommendedCard
                key={book.id}
                id={book.id}
                imageUrl={book.imageUrl}
                index={index}
              />
            ))}
          </ScrollView>
        </View>

        {/* Best Sellers Section */}
        <View style={styles.section}>
          <SectionHeader 
            title="Best Sellers" 
            showSeeMore 
            seeMoreLink="/bestsellers" 
          />
          <View style={styles.bestSellersContainer}>
            {bestSellers.map((book, index) => (
              <BestSellerCard
                key={book.id}
                {...book}
                index={index}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
  },
  recommendedContainer: {
    paddingHorizontal: 16,
  },
  bestSellersContainer: {
    paddingTop: 8,
  },
});
