const getUser = () => {
  const existingUser = sessionStorage.getItem('userId');
  if (existingUser) {
      return existingUser; 
  } else {
      const newUser = 'user-' + new Date().getTime();
      sessionStorage.setItem('userId', newUser)
      return newUser;
  }
}


const getDataKey = () => {
  const userId = getUser();
  return `carts/${userId}`
  // `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
  const dataKey = getDataKey();
  const data = localStorage.getItem(dataKey) || "{}";
  return JSON.parse(data);
}

const addToDatabaseCart = (id, count) => {
  const currentCart = getDatabaseCart();
  currentCart[id] = count;
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = id => {
  const currentCart = getDatabaseCart();
  delete currentCart[id];
  localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
  localStorage.removeItem(getDataKey());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
let store = {}
return {
  getItem(id) {
    return store[id]
  },
  setItem(id, value) {
    store[id] = value.toString()
  },
  clear() {
    store = {}
  }
};
})()

const sessionStorage = window.sessionStorage || (() => {
let store = {}
return {
  getItem(id) {
    return store[id]
  },
  setItem(id, value) {
    store[id] = value.toString()
  },
  clear() {
    store = {}
  }
};
})()
// end of poly fill