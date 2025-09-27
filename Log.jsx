 /*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      alert("Email or password incorrect");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));

    // تحميل cart الخاص بالمستخدم
    const savedCart =
      JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
    dispatch(setCart(savedCart));
    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://oneprodex5.netlify.app/api/auth/google";
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6B73FF, #000DFF)",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit" style={{
            padding: "10px",
            borderRadius: "6px",
            border: "none",
            background: "#000DFF",
            color: "white",
            cursor: "pointer",
          }}>Login</button>
        </form>
        <button onClick={handleGoogleLogin} style={{
          marginTop: "15px",
          padding: "10px",
          width: "100%",
          borderRadius: "6px",
          border: "none",
          background: "#DB4437",
          color: "white",
          cursor: "pointer",
        }}>Login with Google</button>
        <p style={{ marginTop: "20px" }}>Don't have an account? <a href="/Reg" style={{ color: "#6B73FF" }}>Register</a></p>
      </div>
    </div>
  );
} */




































 /* import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Email or password incorrect");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));

    // تحميل الكارت من localStorage الخاص بالمستخدم
    const savedCart =
      JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
    dispatch(setCart(savedCart));

    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://localhost:5173/api/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6B73FF, #000DFF)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: "#000DFF",
              color: "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            borderRadius: "6px",
            border: "none",
            background: "#DB4437",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <a href="/Reg" style={{ color: "#6B73FF" }}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}*/


























 /*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Email or password incorrect");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));

    // تحميل الكارت من localStorage الخاص بالمستخدم
    const savedCart =
      JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
    dispatch(setCart(savedCart));

    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://localhost:5173/api/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6B73FF, #000DFF)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: "#000DFF",
              color: "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            borderRadius: "6px",
            border: "none",
            background: "#DB4437",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
} */























  









   












 /* import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserEmail } from "./RTK/Slices/cartSlice"; // ✅ استدعاء الأكشن
import axios from "axios";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      try {
        const res = await axios.post("http://localhost:7000/api/login", {
          email,
          password,
        });
        user = res.data.user;
      } catch (err) {
        alert("Email or password incorrect");
        return;
      }
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));

    // تحميل الكارت لكل مستخدم
      dispatch(setUserEmail(user.email))// ✅ هنا التعديل الأساسي

    navigate("/"); // التوجيه للصفحة الرئيسية
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://localhost:5173/api/auth/google";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6B73FF, #000DFF)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: "#000DFF",
              color: "white",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          style={{
            marginTop: "15px",
            padding: "10px",
            width: "100%",
            borderRadius: "6px",
            border: "none",
            background: "#DB4437",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}*/


















































 /*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
 /*import { setCart } from "./RTK/Slices/cartSlice";  
import axios from "axios";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = storedUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      try {
        const res = await axios.post( "http://localhost:7000/api/login", { email, password });
        user = res.data.user;
      } catch (err) {
        alert("Email or password incorrect");
        return;
      }
    }

    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("storage"));

    // تحميل الكارت لكل مستخدم
    const savedCart = JSON.parse(localStorage.getItem("cart_" + user.email)) || [];
    /*dispatch(setCart(savedCart)); 

    navigate("/"); // التوجيه للصفحة الرئيسية
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://localhost:5173/api/auth/google";
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6B73FF, #000DFF)",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#000DFF", color: "white", cursor: "pointer" }}>
            Login
          </button>
        </form>
        <button onClick={handleGoogleLogin}
                style={{ marginTop: "15px", padding: "10px", width: "100%", borderRadius: "6px", border: "none", background: "#DB4437", color: "white", cursor: "pointer" }}>
          Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF" }}>Register</Link>
        </p>
      </div>
    </div>
  );
}  */   






















 /*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";
import { loadCart } from "./RTK/Slices/cartSlice";
import axios from "axios";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = storedUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      try {
        const res = await axios.post("http://localhost:7000/api/login", { email, password });
        user = res.data.user;
      } catch (err) {
        alert("Email or password incorrect");
        return;
      }
    }

    // حفظ بيانات المستخدم
    localStorage.setItem("user", JSON.stringify(user));
    
    // تحميل سلة المستخدم من localStorage
    const savedCart = loadCart(user.email);
    dispatch(setCart(savedCart));
    
    // مسح سلة الضيف
    localStorage.removeItem("cart_guest");
    
    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "https://localhost:7000/api/auth/google";
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6B73FF, #000DFF)",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#000DFF", color: "white", cursor: "pointer" }}>
            Login
          </button>
        </form>
        <button onClick={handleGoogleLogin}
                style={{ marginTop: "15px", padding: "10px", width: "100%", borderRadius: "6px", border: "none", background: "#DB4437", color: "white", cursor: "pointer" }}>
          Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF" }}>Register</Link>
        </p>
      </div>
    </div>
  );
} */





















   /*import React, { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";
import { loadCart } from "./RTK/Slices/cartSlice";
import axios from "axios";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const name = searchParams.get("name");
  const emailFromGoogle = searchParams.get("email");
  const id = searchParams.get("id");

  // معالجة تسجيل الدخول عبر Google
  useEffect(() => {
    if (token && emailFromGoogle) {
      const user = { id, name, email: emailFromGoogle };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      const savedCart = JSON.parse(localStorage.getItem("cart_" + emailFromGoogle)) || [];
      dispatch(setCart(savedCart));

      window.dispatchEvent(new Event("storage"));
      navigate("/");
    }
  }, [token, emailFromGoogle, id, name, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = storedUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      try {
        const res = await axios.post("http://localhost:7000/api/login", { email, password });
        user = res.data.user;
      } catch (err) {
        alert("Email or password incorrect");
        return;
      }
    }

    // حفظ بيانات المستخدم
    localStorage.setItem("user", JSON.stringify(user));
    
    // تحميل سلة المستخدم من localStorage
    const savedCart = loadCart(user.email);
    dispatch(setCart(savedCart));
    
    // مسح سلة الضيف
    localStorage.removeItem("cart_guest");
    
    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:7000/api/auth/google";
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6B73FF, #000DFF)",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#000DFF", color: "white", cursor: "pointer" }}>
            Login
          </button>
        </form>
        <button onClick={handleGoogleLogin}
                style={{ marginTop: "15px", padding: "10px", width: "100%", borderRadius: "6px", border: "none", background: "#DB4437", color: "white", cursor: "pointer" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="#fff" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>   
 
            Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF" }}>Register</Link>
        </p>
      </div>
    </div>
  );
}*/ 









/*import React, { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";
import { loadCart } from "./RTK/Slices/cartSlice";
import axios from "axios";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const name = searchParams.get("name");
  const emailFromGoogle = searchParams.get("email");
  const id = searchParams.get("id");

  useEffect(() => {
    if (token && emailFromGoogle) {
      const user = { id, name, email: emailFromGoogle };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      const savedCart = JSON.parse(localStorage.getItem("cart_" + emailFromGoogle)) || [];
      dispatch(setCart(savedCart));

      window.dispatchEvent(new Event("storage"));
      navigate("/");
    }
  }, [token, emailFromGoogle, id, name, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = storedUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      try {
        const res = await axios.post("http://localhost:7000/api/auth/login", { email, password });
        user = res.data.user;
      } catch (err) {
        alert("Email or password incorrect");
        return;
      }
    }

    localStorage.setItem("user", JSON.stringify(user));
    const savedCart = loadCart(user.email);
    dispatch(setCart(savedCart));
    localStorage.removeItem("cart_guest");
    navigate("/");
    window.location.reload();
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:7000/api/auth/google";
  };

  // ---- UI/UX DESIGN ----
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0e7ff 0%, #6366f1 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.92)",
        padding: "40px 32px",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(99,102,241,0.18)",
        width: "360px",
        maxWidth: "96vw",
        textAlign: "center",
        border: "1px solid #e0e7ff",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          background: "linear-gradient(90deg,#6366f1 0%,#6b73ff 100%)",
          height: "7px",
          width: "100%",
          borderRadius: "8px",
          marginBottom: "18px"
        }}></div>
        <h2 style={{
          marginBottom: "24px",
          color: "#6366f1",
          fontWeight: 800,
          fontSize: "2rem",
          letterSpacing: "2px"
        }}>
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #d1d5db",
              fontSize: "1rem",
              background: "#f3f4f6",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            required
            onFocus={e => e.target.style.borderColor = "#6366f1"}
            onBlur={e => e.target.style.borderColor = "#d1d5db"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #d1d5db",
              fontSize: "1rem",
              background: "#f3f4f6",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            required
            onFocus={e => e.target.style.borderColor = "#6366f1"}
            onBlur={e => e.target.style.borderColor = "#d1d5db"}
          />
          <button
            type="submit"
            style={{
              padding: "13px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg, #6366f1 0%, #6b73ff 100%)",
              color: "white",
              fontWeight: 700,
              fontSize: "1.05rem",
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(99,102,241,0.07)",
              transition: "background 0.2s"
            }}>
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          style={{
            marginTop: "18px",
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg,#ea4335 0%, #ff6b6b 100%)",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "0 2px 10px rgba(234,67,53,0.07)",
            marginBottom: "10px"
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
            <path fill="#fff" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Google
        </button>
        <p style={{ marginTop: "20px", fontSize: "1rem", color: "#6366f1" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF", fontWeight: 700, textDecoration: "underline" }}>Register</Link>
        </p>
      </div>
    </div>
  );
}*/






















  import React, { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";
import { loadCart } from "./RTK/Slices/cartSlice";
import axios from "axios";
import logphoto from "./assets/log-img.jpg";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const name = searchParams.get("name");
  const emailFromGoogle = searchParams.get("email");
  const id = searchParams.get("id");

  // تعريف بيانات المسؤول
  const adminEmail = "adminEngYassaHanna2030@gmail.com";
  const adminPassword = "adminEngYassaHanna2030";

  useEffect(() => {
    if (token && emailFromGoogle) {
      const user = { 
        id, 
        name, 
        email: emailFromGoogle,
        role: emailFromGoogle === adminEmail ? "admin" : "user"
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      const savedCart = JSON.parse(localStorage.getItem("cart_" + emailFromGoogle)) || [];
      dispatch(setCart(savedCart));

      window.dispatchEvent(new Event("storage"));
      
      // التحقق إذا كان المستخدم مسؤولاً
      if (emailFromGoogle === adminEmail) {
        navigate("/AdminDashboard");
      } else {
        navigate("/");
      }
    }
  }, [token, emailFromGoogle, id, name, navigate, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // التحقق إذا كان المستخدم يحاول تسجيل الدخول كمسؤول
    if (email === adminEmail && password === adminPassword) {
      const adminUser = {
        id: "admin-001",
        name: "Admin Eng Yassa Hanna",
        email: adminEmail,
        role: "admin"
      };
      
      localStorage.setItem("user", JSON.stringify(adminUser));
      localStorage.setItem("token", "admin-token");
      
      // تحميل عربة التسوق الخاصة بالمسؤول (إن وجدت)
      const savedCart = loadCart(adminEmail);
      dispatch(setCart(savedCart));
      localStorage.removeItem("cart_guest");
      
      navigate("/AdminDashboard");
      window.location.reload();
      return;
    }
    
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    let user = storedUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      try {
        const res = await axios.post("http://localhost:7000/api/auth/login", { email, password });
        user = res.data.user;
      } catch (err) {
        alert("Email or password incorrect");
        return;
      }
    }

    localStorage.setItem("user", JSON.stringify(user));
    const savedCart = loadCart(user.email);
    dispatch(setCart(savedCart));
    localStorage.removeItem("cart_guest");

    // التوجيه حسب الدور
    if (user.role === "admin" || email === adminEmail) {
      navigate("/AdminDashboard");
    } else {
      navigate("/");
    }
    window.location.reload();
  };

  const handleGoogleLogin = () => {
    window.location.href =  "http://localhost:7000/api/auth/google";
  };

  // ---- BACKGROUND SPLIT DESIGN ----
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f8f8ff",
    }}>
      <div style={{
        display: "flex",
        width: "720px",
        maxWidth: "98vw",
        minHeight: "60vh",
        background: "white",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(99,102,241,0.15)",
        overflow: "hidden",
      }}>
        {/* Image Side */}
        <div style={{
          flex: 1,
          background: "#fff6fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "36px 12px"
        }}>
          <img
            src={logphoto}
            alt="Login Art"
            style={{
              width: "85%",
              maxWidth: "340px",
              borderRadius: "25px",
              boxShadow: "0 2px 16px rgba(99,102,241,0.10)",
              background: "#fff",
              objectFit: "contain"
            }}
          />
        </div>
        {/* Form Side */}
        <div style={{
          flex: 1,
          padding: "40px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff"
        }}>
          <h2 style={{
            marginBottom: "24px",
            color: "#6366f1",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "2px"
          }}>
            Login
          </h2>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px", width: "100%" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1.5px solid #d1d5db",
                fontSize: "1rem",
                background: "#f3f4f6",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              required
              onFocus={e => e.target.style.borderColor = "#6366f1"}
              onBlur={e => e.target.style.borderColor = "#d1d5db"}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1.5px solid #d1d5db",
                fontSize: "1rem",
                background: "#f3f4f6",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              required
              onFocus={e => e.target.style.borderColor = "#6366f1"}
              onBlur={e => e.target.style.borderColor = "#d1d5db"}
            />
            <button
              type="submit"
              style={{
                padding: "13px",
                borderRadius: "8px",
                border: "none",
                background: "linear-gradient(90deg, #6366f1 0%, #6b73ff 100%)",
                color: "white",
                fontWeight: 700,
                fontSize: "1.05rem",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(99,102,241,0.07)",
                transition: "background 0.2s"
              }}>
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            style={{
              marginTop: "18px",
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg,#ea4335 0%, #ff6b6b 100%)",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 2px 10px rgba(234,67,53,0.07)",
              marginBottom: "10px"
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24">
              <path fill="#fff" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            Login with Google
          </button>
          <p style={{ marginTop: "20px", fontSize: "1rem", color: "#6366f1" }}>
            Don't have an account?{" "}
            <Link to="/reg" style={{ color: "#6B73FF", fontWeight: 700, textDecoration: "underline" }}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}





/*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // API call to backend
      const res = await fetch("http://localhost:7000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // Load cart of this user
      const savedCart =
        JSON.parse(localStorage.getItem("cart_" + email)) || [];
      dispatch(setCart(savedCart));

      alert("Login successful");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error during login");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:7000/api/auth/google";
  };

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", background: "linear-gradient(135deg, #6B73FF, #000DFF)"
    }}>
      <div style={{
        background: "white", padding: "40px", borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)", width: "350px", textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#000DFF" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#000DFF", color: "white", cursor: "pointer" }}>
            Login
          </button>
        </form>
        <button onClick={handleGoogleLogin}
                style={{ marginTop: "15px", padding: "10px", width: "100%",
                         borderRadius: "6px", border: "none",
                         background: "#DB4437", color: "white", cursor: "pointer" }}>
          Login with Google
        </button>
        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/reg" style={{ color: "#6B73FF" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}*/














/*import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./RTK/Slices/cartSlice";

export default function Log({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    // تحقق مبدئي فقط (ممكن تتطور ب backend)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      localStorage.setItem("user", JSON.stringify(existingUser));
      setUser(existingUser);

      // تحميل الكارت من localStorage
      const carts = JSON.parse(localStorage.getItem("carts")) || {};
      if (carts[email]) {
        dispatch(setCart({ userEmail: email, cart: carts[email] }));
      }
      alert("تم تسجيل الدخول بنجاح ✅");
    } else {
      alert("البريد الإلكتروني أو كلمة المرور غير صحيحة ❌");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ margin: "20px" }}>
      <h2>تسجيل الدخول</h2>
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">دخول</button>
    </form>
  );
}*/

