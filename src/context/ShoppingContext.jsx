import React, { createContext, useContext, useEffect, useReducer } from 'react';

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
      return items.filter((item) => item.id !== action.id);
    case 'reset':
      return action.payload;
    default:
      throw new Error(
        'There is an error that is causing the switch to hit the Default Case. Please debug'
      );
  }
}

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, [
    { id: 0, text: 'beef 🐄', done: false },
    { id: 1, text: 'apple 🍏', done: false },
    { id: 2, text: 'leaf 🍃', done: false },
  ]);

  useEffect(() => {
    const items = [
      { id: 0, text: 'beef 🐄', done: false },
      { id: 1, text: 'apple 🍏', done: false },
      { id: 2, text: 'leaf 🍃', done: false },
    ];
    dispatch({ type: 'reset', payload: items });
  }, []);

  const handleAdd = (text) => {
    dispatch({ type: 'add', id: items.length, text });
  };

  const handleEdit = (entry) => {
    dispatch({ type: 'edit', entry });
  };

  const handleDelete = (entryId) => {
    dispatch({ type: 'delete', id: entryId });
  };

  return (
    <ItemContext.Provider value={{ items, handleAdd, handleEdit, handleDelete }}>
      {children}
    </ItemContext.Provider>
  );
};

const useItems = () => {
  const context = useContext(ItemContext);

  if (context === undefined) {
    throw new Error('useItems must be used within an ItemProvider component');
  }
  return context;
};

export { ItemProvider, useItems };
