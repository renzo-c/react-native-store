export type MainStackParamList = {
  HomeScreen: undefined;
  DestinationSearchScreen: undefined;
  GuestsScreen: undefined;
};

export type BottomTabParamList = {
  Explore: undefined;
  // Map: undefined;
  // Checkout: undefined;
};

export type Post = {
    id: string,
    image: string,
    type: string,
    title: string,
    description: string,
    bed: number,
    bedroom: number,
    oldPrice: number,
    newPrice: number,
    totalPrice: number,
    coordinate: {
      latitude: number,
      longitude: number,
    },
}

export type PostProps = {
  post: Post;
}