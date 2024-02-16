// fakeLocalStorage.js

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    // console.log(setItem);
  };
  
  const getItem = (key) => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  };
  
  export { setItem, getItem };
  