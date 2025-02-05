import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AudioBookCard from './AudioBookCard';

const SAMPLE_DATA = [
  {
    id: '1',
    title: 'The Power of Habit',
    duration: '7h 15m',
    isPlaying: false,
  },
  {
    id: '2',
    title: 'Deep Work',
    duration: '5h 45m',
    isPlaying: false,
  },
];

export default function FavoritesList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SAMPLE_DATA}
        keyExtractor={item => item.id}
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
    backgroundColor: 'transparent',
  },
  listContent: {
    paddingVertical: 8,
  },
});