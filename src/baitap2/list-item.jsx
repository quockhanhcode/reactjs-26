import Item from "./item";

function ListItem() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default ListItem;
