import ItemCounter from "../ItemCounter";
import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="d-flex flex-column p-5">
      <h1>{item.title}</h1>
      <div className="row">
        <img alt={item.title} src={item.image} style={{ width: "200px" }} />
        <div className="col align-self-center">
          <h2 className="price d-flex">${item.price}</h2>
          <ItemCounter item={item}/>
        </div>
      </div>
      <span>{item.description}</span>
    </div>
  );
};
export default ItemDetail;
