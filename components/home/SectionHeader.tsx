import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = {
  title: string;
  showSeeMore?: boolean;
  seeMoreLink?: string;
};

export const SectionHeader = ({ title, showSeeMore = false, seeMoreLink = "/" }: Props) => {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      {showSeeMore && (
        <Link href={seeMoreLink} asChild>
          <TouchableOpacity>
            <ThemedText style={[styles.seeMore, { color: Colors[colorScheme ?? 'light'].tint }]}>
              See More
            </ThemedText>
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  seeMore: {
    fontSize: 14,
    fontWeight: '600',
  },
}); 