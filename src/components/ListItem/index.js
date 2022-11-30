
import { Link } from "react-router-dom";

import ItemCounter from "../ItemCounter";

const ListItem = ({ item }) => { 

  return (
    <div key={item.id} className="card m-2 shadow-lg p-3 mb-5 bg-white rounded" style={{width:"250px"}}>
      <Link to={`/item/${item.id}`}>
      <img alt={item.title} src={item.image} className="card-img-top" style={{height: "250px", objectFit: "contain"}} />
    </Link>
      <div className="card-body d-flex flex-column justify-content-between">
        <h3 className="card-title">{item.title}</h3>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <span>${item.price}</span>
            <span>Rating: {item.rating.rate}</span>
          </div>
          <ItemCounter item={item} />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
