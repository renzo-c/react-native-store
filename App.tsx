import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/Home';
import PostScreen from './src/screens/Post';

import posts from './src/assets/data/feed';

const post1 = posts[0];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <PostScreen post={post1}/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
});
