import ItemCounter from "../ItemCounter";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="columna">
      <h1>{item.title}</h1>
      <div className="fila">
        <img src={item.image} style={{ width: "100px" }} />
        <div className="columna">
          <span>${item.price}</span>
          <ItemCounter/>
        </div>
      </div>
      <span>{item.description}</span>
    </div>
  );
};
export default ItemDetail;
