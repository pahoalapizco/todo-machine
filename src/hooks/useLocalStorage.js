import { useState, useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(initialValue);

  useEffect(() => {    
    try {        
      const localstorageItems = JSON.parse(localStorage.getItem(itemName));
      const defaultItems = localstorageItems || initialValue;
  
      if(!localstorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
      }
  
      setItems(defaultItems);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);
  
  
  const saveItems = (newItems) => {
    try {
      setItems(newItems);
      localStorage.setItem(itemName, JSON.stringify(newItems));      
    } catch (error) {
      setError(error);
    }
  }

  return {
    items, 
    saveItems,
    loading,
    error,
  };
}
