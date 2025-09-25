 /*import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}*/




































































/*import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))}>+</button>
      <button onClick={() => dispatch(removeFromCart({ id: item.id, userEmail: user.email }))}>Remove</button>
      <button onClick={() => dispatch(clearCart(user.email))}>Clear All</button>
    </div>
  );
}*/















































/*import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))}>+</button>
      <button onClick={() => dispatch(removeFromCart({ id: item.id, userEmail: user.email }))}>Remove</button>
      <button onClick={() => dispatch(clearCart(user.email))}>Clear All</button>
      <button onClick={() => dispatch(clearCart(user.email))}>Clear All</button>
    </div>
  );
}*/






























































/*import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button
        onClick={() => dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))}
        disabled={item.quantity === 1}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))}>
        +
      </button>
      <button onClick={() => dispatch(removeFromCart({ id: item.id, userEmail: user.email }))}>
        Remove
      </button>
      <button onClick={() => dispatch(clearCart(user.email))}>Clear All</button>
    </div>
  );
}*/






















































































/*import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <img
        src={item.thumbnail || item.images?.[0]}
        alt={item.title}
        width="50"
      />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button
        onClick={() =>
          dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))
        }
        disabled={item.quantity === 1}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() =>
          dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch(removeFromCart({ id: item.id, userEmail: user.email }))
        }
      >
        Remove
      </button>
     </div>
  );
}*/









































 /*import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <img
        src={item.thumbnail || item.images?.[0]}
        alt={item.title}
        width="50"
      />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button
        onClick={() =>
          dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))
        }
        disabled={item.quantity === 1}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() =>
          dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch(removeFromCart({ id: item.id, userEmail: user.email }))
        }
      >
        Remove
      </button>
      <button onClick={() => dispatch(clearCart(user.email))}>Clear All</button>
    </div>
  );
} */













































/*import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <img
        src={item.thumbnail || item.images?.[0]}
        alt={item.title}
        width="50"
      />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button
        onClick={() =>
          dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))
        }
        disabled={item.quantity === 1}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() =>
          dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch(removeFromCart({ id: item.id, userEmail: user.email }))
        }
      >
        Remove
      </button>
    </div>
  );
}*/


























 /*import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <span style={{ flex: 1, fontWeight: "bold" }}>
        {item.title} (${item.price})
      </span>

      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <button
          style={{ background: "gray", color: "white", padding: "5px 10px" }}
          onClick={() =>
            dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))
          }
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          style={{ background: "green", color: "white", padding: "5px 10px" }}
          onClick={() =>
            dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))
          }
        >
          +
        </button>
        <button
          style={{ background: "red", color: "white", padding: "5px 10px" }}
          onClick={() =>
            dispatch(removeFromCart({ id: item.id, userEmail: user.email }))
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
} */






























  import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}  


 



















 

































 /* import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}*/
