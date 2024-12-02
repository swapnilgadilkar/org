import React from 'react';
import {
  FlatList as RNFlatList,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

interface FlatListProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => JSX.Element;
  keyExtractor: (item: T, index: number) => string;
  isLoading?: boolean;
}

export function FlatList<T>({
  data,
  renderItem,
  keyExtractor,
  isLoading,
}: FlatListProps<T>) {
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!data.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Data Available</Text>
      </View>
    );
  }

  return (
    <RNFlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

export default FlatList;
