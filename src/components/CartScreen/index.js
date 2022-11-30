import { useContext } from "react";
import { CartContext } from "../CartContext";
import { collection, doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import ListItem from "../ListItem";

const CartScreen = () => {
  const { cart, clearCart, getTotalPrice } =
    useContext(CartContext);
  const handleClick = async () => {
    const data = { total: getTotalPrice(), cart: cart, date: serverTimestamp() };
    const db = getFirestore();
    const newPurchaseRef = doc(collection(db, "compras"));
    await setDoc(newPurchaseRef, data);
    clearCart();
  };

  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <div className="d-flex flex-wrap">
        {cart.map((i) => (
          <ListItem key={i.id} item={i.item} />
        ))}
      </div>
      {cart.length ? <h2>Precio Final ${getTotalPrice()}</h2> : <h2>No hay items en el carrito!</h2>}
      <div className="d-flex flex-row justify-content-evenly w-100">
        <button className="btn btn-success" onClick={handleClick}>
          Comprar
        </button>
        <button className="btn btn-danger" onClick={clearCart}>
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
