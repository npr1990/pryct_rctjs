import ListItem from "../ListItem";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex flex-wrap">
      {items.map((i) => (
        <ListItem item={i} key={i.id}/>
      ))}
    </div>
  );
};

export default ItemList;
