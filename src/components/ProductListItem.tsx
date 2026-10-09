import { StyleSheet, Image } from "react-native";

import { Text, View } from "@/src/components/Themed";
import Color from "@/src/constants/Colors";
import { Product } from "../types";

type ProductListItemProps = {
    product: Product;
}

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product}: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} resizeMode="contain"/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}€</Text>
    </View>
  );
};

export default ProductListItem;;


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Color.light.tint,
  },
  price: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  image: {
    width: "90%",
    aspectRatio: 1,
  },
});
