import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Dimensions
} from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto'
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Destination Search")} style={styles.searchButton}>
        <Fontisto name="search" size={25} color="#f15454" />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
      <ImageBackground
        source={require("../../assets/images/exotic-soda.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>{`Go\nNear`}</Text>
        <Pressable onPress={() => console.warn("button")} style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    zIndex: 0
  },
  image: {
    height: 550,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 100,
    color: "white",
    // width: '70%',
    lineHeight: 97,
    marginLeft: 25,
  },
  exploreButton: {
    color: '#FFF',
    width: 200,
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  exploreButtonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchButton: {
    color: '#FFF',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    position: "absolute",
    top: 50,
    zIndex: 10,
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});
