/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find((i) => i.id === action.payload.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;*/




















/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQty: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;*/

















































































/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;*/







































/*import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;*/














































/*import { createSlice } from "@reduxjs/toolkit";

const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCart(state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((p) => p.id !== action.payload);
      saveCart(newState);
      return newState;
    },
    clearCart: () => {
      saveCart([]);
      return [];
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCart(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;*/





























































































/*import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const { userEmail, ...product } = action.payload;
      const existing = state.find(item => item.id === product.id);
      if (existing) existing.quantity += 1;
      else state.push({ ...product, quantity: 1 });
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    increaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.find(i => i.id === id);
      if (item) item.quantity += 1;
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.find(i => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id, userEmail } = action.payload;
      const index = state.findIndex(i => i.id === id);
      if (index !== -1) state.splice(index, 1);
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    clearCart: (state, action) => {
      const userEmail = action.payload;
      state.length = 0;
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
  },
});

export const {
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;*/












































 /*import { createSlice } from "@reduxjs/toolkit";

const loadCart = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      saveCart(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
      saveCart(state.items);
    },
    increaseQuantity: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) product.quantity += 1;
      saveCart(state.items);
    },
    decreaseQuantity: (state, action) => {
      const product = state.items.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;*/ 









































 /*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const { product, userEmail } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const { id, userEmail } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    increaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      const userEmail = action.payload;
      state.items = [];
      localStorage.setItem("cart_" + userEmail, JSON.stringify([]));
    },
  },
});

export const {
  setCart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer; */







































































/*import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = (userEmail) => {
  if (!userEmail) return [];
  return JSON.parse(localStorage.getItem("cart_" + userEmail)) || [];
};

const saveCartToStorage = (userEmail, cart) => {
  if (userEmail) {
    localStorage.setItem("cart_" + userEmail, JSON.stringify(cart));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    loadCart: (state, action) => {
      return getCartFromStorage(action.payload);
    },
    addToCart: (state, action) => {
      const { product, userEmail } = action.payload;
      const existing = state.find((item) => item.id === product.id);
      let newCart;

      if (existing) {
        newCart = state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state, { ...product, quantity: 1 }];
      }

      saveCartToStorage(userEmail, newCart);
      return newCart;
    },
    increaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const newCart = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToStorage(userEmail, newCart);
      return newCart;
    },
    decreaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const newCart = state.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      saveCartToStorage(userEmail, newCart);
      return newCart;
    },
    removeFromCart: (state, action) => {
      const { id, userEmail } = action.payload;
      const newCart = state.filter((item) => item.id !== id);
      saveCartToStorage(userEmail, newCart);
      return newCart;
    },
    clearCart: (state, action) => {
      const userEmail = action.payload;
      localStorage.removeItem("cart_" + userEmail);
      return [];
    },
  },
});

export const {
  loadCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;*/



















































/*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const { product, userEmail } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    increaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity += 1;
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    decreaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const { id, userEmail } = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      const userEmail = action.payload;
      state.items = [];
      localStorage.removeItem("cart_" + userEmail);
    },
  },
});

export const {
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;*/


































































 /*import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const { product, userEmail } = action.payload;
      const existing = state.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    increaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id, userEmail } = action.payload;
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("cart_" + userEmail, JSON.stringify(newState));
      return newState;
    },
    clearCart: (state, action) => {
      const userEmail = action.payload;
      localStorage.removeItem("cart_" + userEmail);
      return [];
    },
  },
});

export const {
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer; */












































 /*import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const { product, userEmail } = action.payload;
      const existing = state.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    increaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      const { id, userEmail } = action.payload;
      const item = state.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart_" + userEmail, JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id, userEmail } = action.payload;
      const newState = state.filter((item) => item.id !== id);
      localStorage.setItem("cart_" + userEmail, JSON.stringify(newState));
      return newState;
    },
    clearCart: (state, action) => {
      const userEmail = action.payload;
      localStorage.removeItem("cart_" + userEmail);
      return [];
    },
  },
});

export const {
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer; */









































/*import { createSlice } from "@reduxjs/toolkit";

// Save cart for specific user
const saveCart = (email, cart) => {
  if (!email) return;
  try {
    localStorage.setItem("cart_" + email, JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

// Load cart for specific user
const loadCart = (email) => {
  if (!email) return [];
  try {
    const stored = localStorage.getItem("cart_" + email);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // cart items
    userEmail: null, // store current user email
  },
  reducers: {
    setUser: (state, action) => {
      // load user cart when setting user
      const email = action.payload;
      state.userEmail = email;
      state.items = loadCart(email);
    },
    addToCart: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCart(state.userEmail, state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
      saveCart(state.userEmail, state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart(state.userEmail, []);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.userEmail, state.items);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state.userEmail, state.items);
    },
  },
});

export const {
  setUser,
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;*/







 



























 /*import { createSlice } from "@reduxjs/toolkit";

const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCart(state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter((p) => p.id !== action.payload);
      saveCart(newState);
      return newState;
    },
    clearCart: () => {
      saveCart([]);
      return [];
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCart(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer; */  











































 import { createSlice } from "@reduxjs/toolkit";

// دالة مساعدة للحفظ مع مراعاة المستخدم
const saveCart = (cart, userEmail = 'guest') => {
  try {
    localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

// دالة مساعدة لتحميل السلة بناءً على المستخدم
export const loadCart = (userEmail = 'guest') => {
  try {
    const serializedCart = localStorage.getItem(`cart_${userEmail}`);
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
    increaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    setCart: (state, action) => {
      return action.payload;
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  setCart
} = cartSlice.actions;
export default cartSlice.reducer; 












 






 



 














/*import { createSlice } from "@reduxjs/toolkit";

// helper: key name for localStorage
const keyFor = (email) => (email ? `cart_${email}` : "cart_guest");

const saveCart = (email, items) => {
  try {
    localStorage.setItem(keyFor(email), JSON.stringify(items));
  } catch (e) {
    console.error("Could not save cart", e);
  }
};

  const loadCart = (email) => {
  try {
    const s = localStorage.getItem(keyFor(email));
    if (!s) return [];
    const parsed = JSON.parse(s);
    // نتأكد إن القيمة Array فقط
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Could not load cart", e);
    return [];
  }
};



const initialState = {
  items: [],
  userEmail: null, // set when user logs in (or null for guest)
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // set the current user email and load his saved cart
      setUserEmail(state, action) {
  const email = action.payload ?? null;
  state.userEmail = email;

  const loaded = loadCart(email);
  // ضمان انها Array فقط
  state.items = Array.isArray(loaded) ? [...loaded] : [];
},



    // set cart fully (and persist)
    setCart(state, action) {
      state.items = action.payload;
      saveCart(state.userEmail, state.items);
    },

    addToCart(state, action) {
      const product = action.payload;
      const item = state.items.find((i) => i.id === product.id);
      if (item) item.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
      saveCart(state.userEmail, state.items);
    },

    increaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity += 1;
      saveCart(state.userEmail, state.items);
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 1) item.quantity -= 1;
      saveCart(state.userEmail, state.items);
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      saveCart(state.userEmail, state.items);
    },

    // Clear cart AND persist the cleared state (use when user intentionally empties)
    clearCart(state) {
      state.items = [];
      saveCart(state.userEmail, state.items);
    },

    // Clear only Redux state (use on logout so saved localStorage remains)
    clearReduxCartOnly(state) {
      state.items = [];
    },

    // Delete saved cart from localStorage (use only if you want to wipe saved cart)
    deleteSavedCart(state) {
      localStorage.removeItem(keyFor(state.userEmail));
      state.items = [];
    },
  },
});

export const {
  setUserEmail,
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  clearReduxCartOnly,
  deleteSavedCart,
} = cartSlice.actions;

export default cartSlice.reducer;*/








 

 