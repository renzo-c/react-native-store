import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Router from "./src/navigation/Router";

import posts from './src/assets/data/feed';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
});
