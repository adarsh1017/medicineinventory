// hooks/useLocalStorage.js

export const useLocalStorage = (key, initialValue) => {
    const getValue = () => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    };
  
    const setValue = (value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [getValue(), setValue];
  };