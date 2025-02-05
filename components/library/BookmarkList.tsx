import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AudioBookCard from './AudioBookCard';

const SAMPLE_DATA = [
  {
    id: '1',
    title: 'The Great Gatsby',
    duration: '8h 25m',
    isPlaying: true,
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    duration: '6h 30m',
    isPlaying: false,
  },
  // Add more items as needed
];

export default function BookmarkList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SAMPLE_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AudioBookCard
            title={item.title}
            duration={item.duration}
            isPlaying={item.isPlaying}
            onPress={() => console.log('Pressed:', item.title)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
}); 