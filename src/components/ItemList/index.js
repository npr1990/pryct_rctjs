import ListItem from "../ListItem";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((i) => (
        <ListItem item={i}/>
      ))}
    </div>
  );
};

export default ItemList;
