/* import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;*/
























/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

// Load cart from localStorage
const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState: {
    cart: loadCart(),
  },
});

export default store;*/






















































/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;*/



































/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from ".RTK/Slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});*/





















/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;*/













/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;*/



























/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

export default store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});*/


















// RTK/store.js
/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;*/

























 /*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store; */




















 


/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;*/



























/*import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";

// Load cart from localStorage
const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState: {
    cart: loadCart(),
  },
});

export default store;*/















 import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import productsReducer from "./Slices/productsSlice";
import { loadCart } from "./Slices/cartSlice";

// تحميل المستخدم من localStorage
const getCurrentUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user.email : 'guest';
  } catch (e) {
    return 'guest';
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState: {
    cart: loadCart(getCurrentUser()),
  },
});

// اشترك في تغييرات الحالة لحفظ السلة تلقائياً
store.subscribe(() => {
  const state = store.getState();
  const userEmail = getCurrentUser();
  localStorage.setItem(`cart_${userEmail}`, JSON.stringify(state.cart));
});

export default store; 























  