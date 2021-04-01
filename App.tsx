import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/Home';
import PostScreen from './src/screens/Post';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <PostScreen/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
});
