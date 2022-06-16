import { useState } from "react";

export const useLocalStorage = (itmeName, initialValue) => {
  const localstorageItems = JSON.parse(localStorage.getItem(itmeName));
  const defaultItems = localstorageItems || initialValue;

  if(!localstorageItems) {
    localStorage.setItem(itmeName, JSON.stringify(initialValue));
  }
  
  const [items, setItems] = useState(defaultItems);
  
  const saveTodos = (newItems) => {
    setItems(newItems);
    localStorage.setItem(itmeName, JSON.stringify(newItems));
  }

  return [items, saveTodos];
}
