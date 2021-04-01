import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface PostScreenProps {}

const PostScreen = (props: PostScreenProps) => {
  return (
    <View style={styles.container}>
      {/* <Text>Not just a postScreen</Text> */}
      <Image
        source={{ uri: "https://source.unsplash.com/daily?juice" }}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>1 bed - 1 bedrooms</Text>

      <Text style={styles.description} numberOfLines={2}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. It is a long
        established fact that a reader.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.newPrice}>  $30 </Text>
        / night
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  image: {
    //   width: '100%',
    aspectRatio: 3 / 2,
    //   resizeMode: 'cover',
    borderRadius: 10,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold'
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
