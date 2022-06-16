import { useState, useEffect } from "react";

export const useLocalStorage = (itmeName, initialValue) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(initialValue);

  useEffect(() => {    
    try {        
      const localstorageItems = JSON.parse(localStorage.getItem(itmeName));
      const defaultItems = localstorageItems || initialValue;
  
      if(!localstorageItems) {
        localStorage.setItem(itmeName, JSON.stringify(initialValue));
      }
  
      setItems(defaultItems);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);
  
  
  const saveItems = (newItems) => {
    try {
      setItems(newItems);
      localStorage.setItem(itmeName, JSON.stringify(newItems));
      
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
