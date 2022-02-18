import AddItem from '../components/AddItem';
import Item from '../components/Item';
import { useItems } from '../context/ShoppingContext';
import './Shop.css';

export default function Shop() {
  const { items, handleAdd, handleEdit, handleDelete } = useItems();

  return (
    <div>
      <AddItem onAdd={handleAdd} />
      <ul>
        {items.map((item) => (
          <div key={item.id}>
            <Item item={item} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
        ))}
      </ul>
    </div>
  );
}
