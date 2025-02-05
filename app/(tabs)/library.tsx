import React, { useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import BookmarkList from '@/components/library/BookmarkList';
import FavoritesList from '@/components/library/FavouritesList';
import MostPlayedList from '@/components/library/MostPlayedList';

const initialLayout = { width: Dimensions.get('window').width };

export default function LibraryScreen() {
  const [index, setIndex] = useState(0);
  const colorScheme = useColorScheme();
  const [routes] = useState([
    { key: 'bookmarks', title: 'Bookmarks' },
    { key: 'favorites', title: 'Favorites' },
    { key: 'mostPlayed', title: 'Most Played' },
  ]);

  const renderScene = SceneMap({
    bookmarks: BookmarkList,
    favorites: FavoritesList,
    mostPlayed: MostPlayedList,
  });

  return (
    <ThemedView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={[
              styles.tabBar,
              { borderBottomColor: Colors[colorScheme ?? 'light'].border }
            ]}
            indicatorStyle={[
              styles.indicator,
              { backgroundColor: Colors[colorScheme ?? 'light'].tint }
            ]}
            labelStyle={styles.label}
            activeColor={Colors[colorScheme ?? 'light'].tint}
            inactiveColor={Colors[colorScheme ?? 'light'].tabIconDefault}
          />
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
  },
  indicator: {
    height: 3,
  },
  label: {
    fontWeight: '600',
    textTransform: 'none',
  },
});