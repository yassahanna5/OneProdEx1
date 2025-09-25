/* import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.cartItems);

  // عدد المنتجات المختلفة
  const cartCount = cart.length;

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "RoyalBlue",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <h2>MyShop</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}*/













































/*import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart) || []; // ضمان أن cart مش undefined

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}*/


















































 /*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      if (storedUser) {
        const savedCart =
          JSON.parse(localStorage.getItem("cart_" + storedUser.email)) || [];
        dispatch(setCart(savedCart));
      }
    };

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/log");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "blue", color: "white" }}>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>Shop</Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>Cart ({cart.length})</Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>Log</Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>Hi {user.name || user.email}</span>
            <button onClick={handleLogout} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
} */



























































 /*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items || []);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    if (storedUser) {
      const savedCart =
        JSON.parse(localStorage.getItem("cart_" + storedUser.email)) || [];
      dispatch(setCart(savedCart));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("cart_" + user.email, JSON.stringify(cart));
    }
  }, [cart, user]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    dispatch(setCart([]));
    navigate("/log");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "blue", color: "white" }}>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>Shop</Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>Cart ({cart.length})</Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>Log</Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>Hi {user.name || user.email}</span>
            <button onClick={handleLogout} style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
} */

















































  /*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadCart, clearCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      dispatch(loadCart(storedUser.email));
    }
  }, [dispatch]);

  const handleLogout = () => {
    if (user) {
      dispatch(clearCart(user.email));
    }
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/log");
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "blue", color: "white" }}>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>Shop</Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart ({totalItems})
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>Log</Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>Hi {user.name || user.email}</span>
            <button
              onClick={handleLogout}
              style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}*/


























































/*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      if (storedUser) {
        const savedCart =
          JSON.parse(localStorage.getItem("cart_" + storedUser.email)) || [];
        dispatch(setCart(savedCart));
      }
    };

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.removeItem("cart_" + storedUser.email);
    }
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    dispatch(setCart([]));
    navigate("/log");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart ({cart.length})
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>
              Log
            </Link>
            <Link to="/reg" style={{ color: "white" }}>
              Reg
            </Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>
              Hi {user.name || user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}*/












































/*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      if (storedUser) {
        const savedCart =
          JSON.parse(localStorage.getItem("cart_" + storedUser.email)) || [];
        dispatch(setCart(savedCart));
      } else {
        dispatch(setCart([]));
      }
    };

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setCart([])); // امسح الكارت من الـ state
    }
    setUser(null);
    navigate("/log");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>
              Log
            </Link>
            <Link to="/reg" style={{ color: "white" }}>
              Reg
            </Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>
              Hi {user.name || user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}*/

























































/*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      if (storedUser) {
        const savedCart =
          JSON.parse(localStorage.getItem("cart_" + storedUser.email)) || [];
        dispatch(setCart(savedCart));
      } else {
        dispatch(setCart([]));
      }
    };

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setCart([]));
    }
    setUser(null);
    navigate("/log");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart (
          {cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>
              Log
            </Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>
              Hi {user.name || user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}*/

















































  /*import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.cartItems);

  // عدد المنتجات المختلفة
  const cartCount = cart.length;

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "RoyalBlue",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <h2>MyShop</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
} */













































  /* import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
 /* import { setCart } from "./RTK/Slices/cartSlice";    

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

   useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
       /*if (storedUser) {
        const savedCart =
          JSON.parse(localStorage.getItem("cart_" + storedUser.email)) || [];
          dispatch(setCart(savedCart));
      } else {
        dispatch(setCart([]));
      }   
    }; 

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setCart([]));
    }
    setUser(null);
    navigate("/log");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart ({cart.length})
           
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>
              Log
            </Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>
              Hi {user.name || user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
} */
































 /* import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";
import { loadCart } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      
      if (storedUser) {
        // تحميل سلة المستخدم عند تغيير الحالة
        const savedCart = loadCart(storedUser.email);
        dispatch(setCart(savedCart));
      } else {
        // تحميل سلة الضيف إذا لم يكن هناك مستخدم
        const guestCart = loadCart('guest');
        dispatch(setCart(guestCart));
      }
    };

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      // حفظ سلة الضيف فارغة عند تسجيل الخروج
      localStorage.setItem("cart_guest", JSON.stringify([]));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setCart([]));
    }
    setUser(null);
    navigate("/log");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart ({cart.length})
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>
              Log
            </Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>
              Hi {user.name || user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
} */ 









 




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";
import { loadCart } from "./RTK/Slices/cartSlice";

// ضع هنا رابط صورة اللوجو الخاص بك
const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/2331/2331966.png";


 
export default function Navbar() { 
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // إضافة اللوجو ك favicon
  useEffect(() => {
    let favicon = document.querySelector("link[rel='icon']");
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = LOGO_URL;
  }, []);

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);

      if (storedUser) {
        const savedCart = loadCart(storedUser.email);
        dispatch(setCart(savedCart));
      } else {
        const guestCart = loadCart('guest');
        dispatch(setCart(guestCart));
      }
    };

    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    // تطبيق الوضع المظلم على body
    if (savedDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    loadUserCart();
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);

    if (newDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      localStorage.setItem("cart_guest", JSON.stringify([]));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setCart([]));
    }
    setUser(null);
    navigate("/log");
  };

  // أنماط الـ inline
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.7rem 2rem",
    background: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fafafa" : "#222",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
    borderRadius: "0 0 15px 15px",
    fontFamily: "Cairo, Arial, sans-serif",
    transition: "background 0.3s, color 0.3s",
    zIndex: 100,
    position: "sticky",
    top: 0
  };

  const navBrandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  };

  const brandIconStyle = {
    fontSize: "1.6rem"
  };

  const brandTextStyle = {
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: "1px",
    marginLeft: "0.3rem"
  };

 const logoImgStyle = {
    height: "50px", // كان 32px - أصبح 50px
    width: "50px",  // كان 32px - أصبح 50px
    borderRadius: "10px", // تكبير الزوايا المستديرة
    objectFit: "cover",
    boxShadow: "0 0 8px rgba(0,0,0,0.15)" // زيادة الظل ليكون أكثر وضوحاً
  };

  const navLinksStyle = {
    display: "flex",
    gap: "1rem"
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: darkMode ? "#fafafa" : "#222",
    fontWeight: "500",
    fontSize: "1.05rem",
    position: "relative",
    padding: "2px 8px",
    borderRadius: "7px",
    transition: "background 0.2s"
  };

  const cartCountStyle = {
    background: "#e91e63",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "50%",
    padding: "2px 8px",
    fontSize: "0.9rem",
    marginLeft: "3px"
  };

  const navControlsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  };

  const themeToggleStyle = {
    padding: "6px 14px",
    borderRadius: "7px",
    border: "none",
    background: darkMode ? "#333" : "#f1f1f1",
    color: darkMode ? "#ffe082" : "#333",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 0 6px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    gap: "5px"
  };

  const userSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem"
  };

  const userGreetingStyle = {
    fontSize: "1rem",
    fontWeight: "500"
  };

  const userNameStyle = {
    fontWeight: "700",
    fontSize: "1.07rem",
    color: "#009688"
  };

  const logoutBtnStyle = {
    background: "#e91e63",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "5px 14px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem"
  };

  const authLinksStyle = {
    display: "flex",
    gap: "0.6rem"
  };

  const authLinkStyle = {
    textDecoration: "none",
    color: darkMode ? "#fafafa" : "#222",
    background: darkMode ? "#444" : "#f5f5f5",
    padding: "5px 12px",
    borderRadius: "7px",
    fontWeight: "600",
    fontSize: "1rem",
    boxShadow: "0 0 4px rgba(0,0,0,0.07)"
  };

  return (
    <nav style={navbarStyle}>
      <div style={navBrandStyle}>
        {/* MarketOne Logo */}
        <img src={LOGO_URL} alt="MarketOne Logo" style={logoImgStyle} />
        <Link to="/" style={{ ...navLinkStyle, ...brandTextStyle, color: darkMode ? "#ffe082" : "#222" }}>
          <span style={brandIconStyle}>🛍️</span>
          <span style={brandTextStyle}>OneProdEx</span>
        </Link>
      </div>
      <div style={navLinksStyle}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/shop" style={navLinkStyle}>Shop</Link>
        <Link to="/cart" style={{ ...navLinkStyle, position: "relative" }}>
          Cart <span style={cartCountStyle}>{cart.length}</span>
        </Link>
      </div>
      <div style={navControlsStyle}>
        {/* زر تبديل الوضع المظلم */}
        <button
          onClick={toggleDarkMode}
          style={themeToggleStyle}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <span>{darkMode ? "☀️" : "🌙"}</span>
          <span>{darkMode ? "Light" : "Dark"}</span>
        </button>
        {/* جزء المستخدم الحالي */}
        {!user ? (
          <div style={authLinksStyle}>
            <Link to="/log" style={authLinkStyle}>Login</Link>
            <Link to="/reg" style={authLinkStyle}>Register</Link>
          </div>
        ) : (
          <div style={userSectionStyle}>
            <span style={userGreetingStyle}>
              Welcome, <span style={userNameStyle}>{user.name || user.email}</span>
            </span>
            <button
              onClick={handleLogout}
              style={logoutBtnStyle}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}




  








/*import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserEmail, clearReduxCartOnly } from "./RTK/Slices/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items) || [];
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserCart = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
      // load cart for this user (or guest if null)
      dispatch(setUserEmail(storedUser?.email ?? null));
    };

    loadUserCart();
    // If localStorage changes in other tab (e.g. login/logout), reload user/cart
    window.addEventListener("storage", loadUserCart);
    return () => window.removeEventListener("storage", loadUserCart);
  }, [dispatch]);

  const handleLogout = () => {
    // don't delete saved cart from localStorage — only clear Redux state and remove user
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(clearReduxCartOnly());
    setUser(null);
    navigate("/log");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", marginRight: "20px" }}>
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </div>
      <div>
        {!user ? (
          <>
            <Link to="/log" style={{ color: "white", marginRight: "20px" }}>
              Log
            </Link>
            <Link to="/reg" style={{ color: "white" }}>Reg</Link>
          </>
        ) : (
          <>
            <span style={{ marginRight: "15px" }}>
              Hi {user.name || user.email}
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}*/































   





















 