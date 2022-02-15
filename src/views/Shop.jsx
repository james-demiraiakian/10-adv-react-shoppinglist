import react, { useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'beef 🐄', done: false },
  { id: 1, text: 'apple 🍏', done: false },
  { id: 2, text: 'lettuce 🍃', done: false },
];

function itemReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [...items, { id: action.id, text: action.text, done: false }];
    }
    case 'edit': {
      return items.map((item) => {
        if (item.id === action.entry.id) {
          return action.entry;
        }
        return item;
      });
    }
    case 'delete':
      return items.filter((item) => item.id !== action.item);
    default:
      throw new Error(
        'There is an error that is causing the switch to hit the Default Case. Please debug'
      );
  }
}

export default function Shop() {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  const handleAdd = (text) => {
    dispatch({ type: 'add', id: items.length + 1, text });
  };

  const handleEdit = (entry) => {
    dispatch({ type: 'edit', entry });
  };

  const handleDelete = (entryId) => {
    dispatch({ type: 'delete', entryId });
  };
}
