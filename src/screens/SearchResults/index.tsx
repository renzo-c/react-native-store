import * as React from 'react';

import { Text, View, StyleSheet, FlatList } from 'react-native';
import Post from '../../components/Post'

import feed from '../../assets/data/feed';

interface SearchResultsScreenProps {}

const SearchResultsScreen = (props: SearchResultsScreenProps) => {

  return (
    <View style={styles.container}>
      <FlatList 
        data={feed}
        renderItem={({item}) => <Post post={item}/> }
      />
    </View>
  );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({
  container: {}
});
