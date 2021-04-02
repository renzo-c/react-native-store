import React, { useState } from "react";

import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import searchResults from "../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";

interface DestinationSearchScreenProps {}

const DestinationSearchScreen = (props: DestinationSearchScreenProps) => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
  },
  row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: 'lightgray'
  },
  iconContainer: {
      backgroundColor:'#d4d4d4',
      padding: 7,
      borderRadius: 10,
        marginRight: 15
    },
  locationText: {}
});
