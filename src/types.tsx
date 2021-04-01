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