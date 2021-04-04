import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/Home";
import SearchResultsScreen from "../screens/SearchResults";

import { MainStackParamList } from "../types";

interface ExploreNavigatorProps {}

const Stack = createStackNavigator<MainStackParamList>();

const ExploreNavigator = (props: ExploreNavigatorProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Welcome"
          component={HomeScreen}
          options={{
              headerShown: false
          }}
      />
        <Stack.Screen
            name="SearchResults"
            component={SearchResultsScreen}
            options={{
              title: "Search your destination"
            }}
        />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;

const styles = StyleSheet.create({
  container: {}
});
