import React, { useContext, } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart} = useContext(CartContext);

  const total = cart.reduce((counter,  i) => {
    return counter + i.quantity;
  }, 0);
  return (
    <div>
      <Link to="/cart" className="">
      <i className="bi bi-cart cart" style={{ color: "white" }}></i>
      <span className="" style={{ color: "white" }}>{total}</span></Link>
    </div>
  );
};

export default Cart;
