import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${params.id}`;

    const getProducto = async () => {
      setLoading(true);
      const rawData = await fetch(url);
      const json = await rawData.json();
      setItem(json);
      setLoading(false);
    };
    getProducto();
  }, [params.id]);
  
  return (
    <div>{loading ? <div>Loading...</div> : <ItemDetail item={item} />}</div>
  );
};

export default ItemDetailContainer;
