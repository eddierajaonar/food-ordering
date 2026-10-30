import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useCart } from "../providers/CartProvider";
import CartListItem from '../components/CartListItems';

const CartScreen = () => {
  const { items } = useCart();
  return (
      <View style={styles.container}>
        {/* The native header is not rendered inside an Android formSheet */}
        <Text style={styles.title}>Panier</Text>
        <View>
          <FlatList
            data={items}
            renderItem={({item}) => <CartListItem cartItem={item}/>}
            contentContainerStyle={{padding:10,gap:10}}
          />
        </View>
      </View>
  )
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "lightgray",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
