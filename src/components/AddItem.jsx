import { useState } from 'react';

export default function AddItem({ onAdd }) {
  const [newItem, setNewItem] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    setNewItem('');
    onAdd(newItem);
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button>Add Item</button>
    </form>
  );
}
