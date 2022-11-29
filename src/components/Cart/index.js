import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Cart = () => { 

  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
    <Link to="/cart">ver detalles</Link>
    <i className="bi bi-cart" style={{color: "white"}}></i>
    <span style={{color: "white"}}>{cart.length}</span>
    </div>
  );
};

export default Cart;
