import React, { createContext, useEffect, useReducer } from 'react';

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
    default:
      throw new Error(
        'There is an error that is causing the switch to hit the Default Case. Please debug'
      );
  }
}

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, []);

  useEffect(() => {
    const initialItems = [
      { id: 0, text: 'beef 🐄', done: false },
      { id: 1, text: 'apple 🍏', done: false },
      { id: 2, text: 'leaf 🍃', done: false },
    ];
  });
};
