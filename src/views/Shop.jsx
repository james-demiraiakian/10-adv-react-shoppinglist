import { useReducer } from 'react';
import AddItem from '../components/AddItem';
import Item from '../components/Item';
import { useItems } from '../context/ShoppingContext';
import './Shop.css';

// const initialItems = [
//   { id: 0, text: 'beef 🐄', done: false },
//   { id: 1, text: 'apple 🍏', done: false },
//   { id: 2, text: 'leaf 🍃', done: false },
// ];

// function itemReducer(items, action) {
//   switch (action.type) {
//     case 'add': {
//       return [...items, { id: action.id, text: action.text, done: false }];
//     }
//     case 'edit': {
//       return items.map((item) => {
//         if (item.id === action.entry.id) {
//           return action.entry;
//         }
//         return item;
//       });
//     }
//     case 'delete':
//       return items.filter((item) => item.id !== action.id);
//     default:
//       throw new Error(
//         'There is an error that is causing the switch to hit the Default Case. Please debug'
//       );
//   }
// }

export default function Shop() {
  const { itemList } = useItems();
  console.log(useItems());
  const { items, handleAdd, handleEdit, handleDelete } = itemList;
  // const handleAdd = (text) => {
  //   dispatch({ type: 'add', id: items.length, text });
  // };

  // const handleEdit = (entry) => {
  //   dispatch({ type: 'edit', entry });
  // };

  // const handleDelete = (entryId) => {
  //   dispatch({ type: 'delete', id: entryId });
  // };

  return (
    <div>
      <AddItem onAdd={handleAdd} />
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}
