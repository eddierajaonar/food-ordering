/* eslint-disable react-hooks/rules-of-hooks */
import { Image, StyleSheet, Pressable } from "react-native";
import {Text, View} from "@/src/components/Themed";
import { Stack, useLocalSearchParams, router, useRoute, useRouter } from "expo-router";
import products from '@/assets/data/products';
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { useState } from "react";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";


const productDetailsScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const {addItem} = useCart();

    const router = useRouter();

    const sizes: PizzaSize[] = ["S", "M", "L", "XL"];
    const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
    

    const product = products.find((product) => product.id.toString() === id);

    const addToCart = () => {
      if(!product) {return; }
      addItem(product,selectedSize);
      router.push('/cart');
    };

    if(!product) {
        return <Text>Product not found !</Text>
    }

    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: product?.name }} />
        <Image
          source={{ uri: product?.image || defaultPizzaImage }}
          style={styles.image}
        />
        <Text>Select size</Text>
        <View style={styles.sizes}>
          {sizes.map((size) => (
            <Pressable
              onPress={() => {
                setSelectedSize(size);
              }}
              key={size}
              style={[
                styles.size,
                {
                  backgroundColor: selectedSize === size ? "#B0B0B0" : "white",
                },
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  {
                    color: selectedSize === size ? "#black" : "gray",
                  },
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.price}>Price: {product?.price}€</Text>
        <Button onPress={addToCart} text="Add to Cart" />
      </View>
    );
};

export default productDetailsScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        padding:10
    },
    image: {
        width:'100%',
        aspectRatio:1
    },
    price: {
        fontSize:18,
        fontWeight: 'bold',
        marginTop:'auto'
    },
    sizes: {
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:10
    },
    size: {
        backgroundColor:'gainsboro',
        width:50,
        aspectRatio:1,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    sizeText:{
        fontSize:20,
        fontWeight:'500'
    }
});
