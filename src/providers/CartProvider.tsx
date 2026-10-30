import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, CartType, Product } from "../types";
import {randomUUID} from "expo-crypto";


export const CartContext = createContext<CartType>({items:[], addItem: ()=>{}, updateQuantity:()=>{}});

const CartProvider =({children}: PropsWithChildren) => {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem =(product:Product, size:CartItem['size']) => {
        //if already in cart, increment quantity
        //TODO: next here...

        const newCartItem:CartItem = {
            id:randomUUID(),
            product,
            product_id: product.id,
            size,
            quantity:1,

        };

        setItems([newCartItem, ...items]);
    }

    // updateQuantity
    const updateQuantity = (itemId:string,amount: -1 | 1) => {
        setItems((currentItems) =>
            currentItems
                .map((item): CartItem =>
                    item.id !== itemId
                        ? item
                        : { ...item, quantity: item.quantity + amount })
                // remove the item from the cart when its quantity reaches 0
                .filter((item) => item.quantity > 0)
        );
    }

    return (
      <CartContext.Provider value={{ items, addItem, updateQuantity }}>
        {children}
      </CartContext.Provider>
    );
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
