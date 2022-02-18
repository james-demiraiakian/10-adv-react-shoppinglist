import React from 'react';
import { useItems } from '../context/ShoppingContext';

export default function Header() {
  const { items, handleChuckItAll } = useItems();
  const length = items.length;

  return (
    <div>
      <h1>Grocery List</h1>
      {length}
      {length < 2 ? <> Item</> : <> Items</>} on List
      <button onClick={() => handleChuckItAll()}>Chuck It All</button>
    </div>
  );
}
