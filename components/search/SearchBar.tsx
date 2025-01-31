import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withSequence,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const searchBarWidth = useSharedValue(width - 32);
  const loadingRotation = useSharedValue(0);

  const searchBarStyle = useAnimatedStyle(() => ({
    width: searchBarWidth.value,
  }));

  const loadingIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${loadingRotation.value}deg` }],
  }));

  React.useEffect(() => {
    if (isLoading) {
      loadingRotation.value = withRepeat(
        withTiming(360, {
          duration: 1000,
        }),
        -1
      );
    } else {
      loadingRotation.value = withTiming(0);
    }
  }, [isLoading]);

  const handleChangeText = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.searchContainer, searchBarStyle]}>
        {isLoading ? (
          <Animated.View style={loadingIconStyle}>
            <MaterialIcons name="sync" size={24} color="#666" />
          </Animated.View>
        ) : (
          <MaterialIcons name="search" size={24} color="#666" />
        )}
        <TextInput
          style={styles.input}
          placeholder="Search audiobooks..."
          value={query}
          onChangeText={handleChangeText}
          placeholderTextColor="#666"
        />
        {query.length > 0 && (
          <MaterialIcons
            name="close"
            size={24}
            color="#666"
            onPress={() => handleChangeText('')}
          />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1a1a1a',
  },
}); 