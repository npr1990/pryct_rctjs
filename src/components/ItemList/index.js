import ListItem from "../ListItem";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((i) => (
        <ListItem item={i} key={i.id}/>
      ))}
    </div>
  );
};

export default ItemList;
