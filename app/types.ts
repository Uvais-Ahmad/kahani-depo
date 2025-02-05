export {};

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      '/(tabs)': undefined;
      '/(tabs)/index': undefined;
      '/(tabs)/search': undefined;
      '/(tabs)/library': undefined;
      '/(tabs)/recommended': undefined;
      '/(tabs)/bestsellers': undefined;
      '/(tabs)/book/[id]': { id: string };
      '/settings': undefined;
      '/(tabs)/profile': undefined;
    }
  }
} 