import { useContext } from "react";
import { CartContext } from "../CartContext";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import ListItem from "../ListItem";

const CartScreen = () => {
  const { cart, clearCart, removeFromCart, getTotalPrice } =
    useContext(CartContext);
  const handleClick = async () => {
    const data = { total: getTotalPrice(), cart: cart };
    const db = getFirestore();
    const newPurchaseRef = doc(collection(db, "compras"));
    await setDoc(newPurchaseRef, data);
    clearCart()
  };

  return (
    <div>
      {cart.map((i) => (
        <ListItem key={i.id} item={i.item} />
      ))}
      <span>${getTotalPrice()}</span>
      <button onClick={handleClick}>Comprar</button>
      <button onClick={clearCart}>Limpiar</button>
    </div>
  );
};

export default CartScreen;
