/* import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, clearCart } from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <div style={{ flex: 2 }}>{item.title}</div>
              <div style={{ flex: 1 }}>${item.price}</div>
              <div style={{ flex: 1 }}>
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  disabled={item.qty === 1}
                >
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button
            onClick={() => dispatch(clearCart())}
            style={{
              padding: "10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}*/





















 


















































/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div>
                  <strong>{item.title}</strong> (${item.price}) ×{" "}
                  {item.quantity}
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              background: "darkred",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}*/






























































/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div>
                  <strong>{item.title}</strong> (${item.price})
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                    style={{
                      background: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    style={{
                      background: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              background: "darkred",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}*/


















































/*import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map(item => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                <div>
                  <strong>{item.title}</strong> (${item.price})
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => dispatch(decreaseQuantity({ id: item.id, userEmail: user.email }))} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity({ id: item.id, userEmail: user.email }))}>+</button>
                  <button onClick={() => dispatch(removeFromCart({ id: item.id, userEmail: user.email }))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart(user.email))}>Clear All</button>
        </>
      )}
    </div>
  );
}*/



















































/*import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../RTK/Slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  if (cart.length === 0) {
    return <h2 className="text-center mt-4">Cart is Empty</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between align-items-center border p-2 my-2">
          <div>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
          </div>
          <div>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}*/













































/*import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items || []);

  if (cart.length === 0) {
    return <p style={{ padding: "20px" }}>🛒 Cart is empty</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
      <h3>
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
}*/





















































/*import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
}*/




















































/*import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => <CartCard key={item.id} item={item} />)
      )}
    </div>
  );
}*/




























 /*import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Please log in to view your cart.</p>;
  }

  if (!cart.length) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
} */


































































 /* import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./RTK/Slices/cartSlice";
import CartCard from "./CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Please log in to view your cart.</p>;
  }

  if (!cart.length) {
    return <p>Your cart is empty.</p>;
  }

  // حساب total price
  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <button onClick={() => dispatch(clearCart(user.email))}>
        Clear All
      </button>
    </div>
  );
}*/




















































/*import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./RTK/Slices/cartSlice";
import CartCard from "./CartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Please log in to view your cart.</p>;
  }

  if (!cart.length) {
    return <p>Your cart is empty.</p>;
  }

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Your Cart</h2>
      {cart.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
      <h3 style={{ marginTop: "20px" }}>
        Total: ${totalPrice.toFixed(2)}
      </h3>
      <button
        style={{
          background: "darkred",
          color: "white",
          border: "none",
          padding: "10px 20px",
          marginTop: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => dispatch(clearCart(user.email))}
      >
        Clear All
      </button>
    </div>
  );
}*/






























/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./RTK/Slices/cartSlice";

export default function Cart() {
  const { items: cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                <div>
                  <strong>{item.title}</strong> (${item.price})
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear All</button>
        </>
      )}
    </div>
  );
}*/













 















  /*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div>
                  <strong>{item.title}</strong> (${item.price})
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                    style={{
                      background: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    style={{
                      background: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              background: "darkred",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}  */










import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ 
      padding: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        <h2 style={{ 
          fontSize: "28px",
          color: "#333",
          margin: 0
        }}>
          Shopping Cart 🛒
        </h2>
        <span style={{
          fontSize: "18px",
          color: "#666"
        }}>
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px"
        }}>
          <p style={{
            fontSize: "18px",
            color: "#666",
            margin: 0
          }}>
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <div style={{
            display: "grid",
            gap: "20px"
          }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  ":hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }
                }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "20px",
                  alignItems: "center"
                }}>
                  {/* قسم الصور */}
                  <div style={{
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                    paddingBottom: "5px"
                  }}>
                    {item.images?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${item.title} - Image ${index + 1}`}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          border: "2px solid #f0f0f0",
                          transition: "transform 0.2s",
                          ":hover": {
                            transform: "scale(1.05)"
                          }
                        }}
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/120";
                        }}
                      />
                    ))}
                  </div>

                  {/* قسم التفاصيل */}
                  <div>
                    <h3 style={{
                      fontSize: "20px",
                      color: "#333",
                      margin: "0 0 8px 0"
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: "18px",
                      color: "#0070ba",
                      fontWeight: "bold",
                      margin: 0
                    }}>
                      ${item.price}
                    </p>
                    <p style={{
                      fontSize: "14px",
                      color: "#666",
                      margin: "8px 0 0 0"
                    }}>
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* قسم الأزرار */}
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "10px"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      backgroundColor: "#f8f9fa",
                      padding: "5px",
                      borderRadius: "8px"
                    }}>
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        disabled={item.quantity === 1}
                        style={{
                          background: item.quantity === 1 ? "#e0e0e0" : "#0070ba",
                          color: "white",
                          border: "none",
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "18px",
                          transition: "background 0.2s"
                        }}
                      >
                        -
                      </button>

                      <span style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        minWidth: "30px",
                        textAlign: "center"
                      }}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        style={{
                          background: "#0070ba",
                          color: "white",
                          border: "none",
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "18px",
                          transition: "background 0.2s"
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      style={{
                        background: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "14px",
                        transition: "background 0.2s",
                        ":hover": {
                          background: "#c82333"
                        }
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* قسم المجموع والأزرار */}
          <div style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <h3 style={{
                fontSize: "24px",
                color: "#333",
                margin: 0
              }}>
                Total: ${totalPrice.toFixed(2)}
              </h3>
            </div>

            <div style={{
              display: "flex",
              gap: "15px"
            }}>
              <button
                onClick={() => dispatch(clearCart())}
                style={{
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: "background 0.2s",
                  ":hover": {
                    background: "#c82333"
                  }
                }}
              >
                Clear Cart
              </button>
              
              <button
                onClick={() => navigate("/checkout")}
                style={{
                  background: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: "background 0.2s",
                  ":hover": {
                    background: "#218838"
                  }
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}



 

 







/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./RTK/Slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items) || [];
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!storedUser) {
    return <p style={{ padding: "20px" }}>⚠️ Please log in to view your cart.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
                <div>
                  <strong>{item.title}</strong> (${item.price})
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1} style={{ background: "#ccc", border: "none", padding: "5px 10px" }}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ background: "green", color: "white", border: "none", padding: "5px 10px" }}>
                    +
                  </button>

                  <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button onClick={() => dispatch(clearCart())} style={{ background: "darkred", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px" }}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
}*/





 