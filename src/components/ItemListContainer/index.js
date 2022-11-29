import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList";

const ItemListContainer = () => {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect( ()=>{
    
    const url = params.id
    ? `https://fakestoreapi.com/products/category/${params.id}`
    : "https://fakestoreapi.com/products";
    const getProductos=async()=>{  setLoading(true);
      const rawData = await fetch(url);
      const json = await rawData.json();
      setItems(json);
      setLoading(false);}
      getProductos()
  },[params.id])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ItemList items={items}/>
      )}
    </div>
  );
};

export default ItemListContainer;
