import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { Post } from "../../types";
interface PostScreenProps {
  post: Post;
}

const PostScreen = (props: PostScreenProps) => {
  const { post } = props;

  return (
    <View style={styles.container}>
      {/* <Text>Not just a postScreen</Text> */}
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={styles.bedrooms}>
        {post.bed} bed - {post.bedroom} bedrooms
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.description}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
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
    color: "#5b5b5b",
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
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});
