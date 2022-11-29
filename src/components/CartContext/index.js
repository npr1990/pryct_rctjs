import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const clearCart = () => {
    setCart([]);
  };
  const addToCart = (item) => {
    if (isInCart(item.id)) {
      const cartCopy = [...cart];
      for (const element of cartCopy) {
        if (element.item.id === item.id) {
          element.quantity++;
        }
      }
      setCart(cartCopy);
    } else {
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
      let cartCopy = [...cart];
      for (const element of cartCopy) {
        if (element.item.id === item.id) {
          if (element.quantity > 1) {
            element.quantity--;
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

  const getItemQuantity = (id)=> {
    if (isInCart(id)) {
      return cart.find(i=>i.item.id === id).quantity
    } else {
      return 0
    }
  }

  const getTotalPrice = ()=> { 
    const total = cart.reduce((counter,  i) => {
      return counter + i.item.price * i.quantity;
    }, 0);
  return total
  }


  const context = {
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    substractFromCart,
    getItemQuantity,
    getTotalPrice,
  };

  return <Provider value={context}>{children}</Provider>;
};
