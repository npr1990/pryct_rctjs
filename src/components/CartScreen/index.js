import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartScreen = () => {

  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  return (
    <div>{cart.length}</div>
  )
}

export default CartScreen