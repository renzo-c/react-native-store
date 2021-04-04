import React from "react";

import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";
import HomeScreen from "../screens/Home";
import HomeTabNavigator from "../navigation/HomeTabNavigator";

// import {View, Text} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainStackParamList } from "../types";

const Stack = createStackNavigator<MainStackParamList>();

interface RouterProps {}

const Router = (props: RouterProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination"
          }}
        />
        <Stack.Screen 
          name="Guests"
          component={GuestsScreen}
          options={{
            title: "How many people?"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
