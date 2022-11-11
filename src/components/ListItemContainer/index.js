import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ListItemContainer = ({ greeting }) => {
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

  /*fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setItems(json);
      setLoading(false);
    });*/

  return (
    <div>
      {greeting}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {items.map((i) => (
            <div key={i.id}>
              <h3>{i.title}</h3>
              <Link to={`/item/${i.id}`}>ver detalles</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListItemContainer;
