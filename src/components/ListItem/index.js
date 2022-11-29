import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ItemCounter from "../ItemCounter";

const ListItem = ({ item }) => { 

  return (
    <div key={item.id} className="fila">
      <img src={item.image} style={{ width: "100px" }} />
      <div className="columna">
        <h3>{item.title}</h3>
        <div className="fila">
          <div className="columna">
            <span>${item.price}</span>
            <span>{item.ranking}</span>
          </div>
          <ItemCounter item={item} />
        </div>
        <Link to={`/item/${item.id}`}>ver detalles</Link>
      </div>
    </div>
  );
};

export default ListItem;
