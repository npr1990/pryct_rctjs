import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const clearCart = () => {
    setCart([]);
  };
  const addToCart = (item) => {
    console.log(item)
    if (isInCart(item.id)) {
      const cartCopy = [...cart];
      for (const element of cartCopy) {
        if (element.item.id === item.id) {
          element.quantity = element.quantity++;
        }
      }
      setCart(cartCopy);
    } else {
      console.log("else")
      setCart([
        ...cart,
        {
          item: item,
          quantity: 1,
        },
      ]);
    }
  };

  const substractFromCart = (item) => {
    if (isInCart(item.id)) {
      const cartCopy = [...cart];
      for (const element of cartCopy) {
        if (element.item.id === item.id) {
          if (element.id.quantity > 1) {
            element.quantity = element.quantity--;
          } else {
            cartCopy = cartCopy.filter(i => i.item.id !== item.id)
           }
        }
      }
      setCart(cartCopy);
    } 
  };

  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };

  const removeFromCart = (id) => {
    const newCart = [...cart].filter((element) => element.item.id !== id);
    setCart(newCart);
  };

  const context = {
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    substractFromCart,
  };

  return <Provider value={context}>{children}</Provider>;
};
