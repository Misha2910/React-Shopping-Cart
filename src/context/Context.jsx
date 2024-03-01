import React, { createContext, useContext, useReducer, useState } from "react";
import faker from "faker";
import { CartReducer } from "./Reducers";
import { productReducer} from "./Reducers";

faker.seed(100);
// cart context
export const CartContext = createContext();

const Context = ({ children }) => {
  //   fake json data
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  const[productState , productDispatch] = useReducer(productReducer , {
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:"",
    clearFilter:false
  })

  return (
    <CartContext.Provider value={{ state, dispatch,productState,productDispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export const cartState = () => {
  return useContext(CartContext);
};

export default Context;
