  /*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      alert("Email already exists");
      return;
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    navigate("/log");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #FF6B6B, #FF000D)",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px", color: "#FF000D" }}>Register</h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#FF000D", color: "white", cursor: "pointer" }}>
            Register
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>Already have an account? <a href="/log" style={{ color: "#FF6B6B" }}>Login</a></p>
      </div>
    </div>
  );
}  */







 


























  /*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      alert("Email already exists");
      return;
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    navigate("/log");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #FF6B6B, #FF000D)",
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "350px",
        textAlign: "center",
      }}>
        <h2 style={{ marginBottom: "20px", color: "#FF000D" }}>Register</h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#FF000D", color: "white", cursor: "pointer" }}>
            Register
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/log" style={{ color: "#FF6B6B" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
} */




























  /*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) {
      alert("Email already exists");
      return;
    }

    const newUser = { name, email, password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    try {
      await axios.post("http://localhost:7000/api/auth/register", newUser);
    } catch (err) {
      console.log("MongoDB API error:", err);
    }

    alert("Registration successful");
    navigate("/log");
  };

  // ---- UI/UX DESIGN ----
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fff0f6 0%, #ff6b6b 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.94)",
        padding: "40px 32px",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(255,107,107,0.16)",
        width: "360px",
        maxWidth: "96vw",
        textAlign: "center",
        border: "1px solid #ffdee2",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          background: "linear-gradient(90deg,#ff6b6b 0%,#ff000d 100%)",
          height: "7px",
          width: "100%",
          borderRadius: "8px",
          marginBottom: "18px"
        }}></div>
        <h2 style={{
          marginBottom: "24px",
          color: "#ff6b6b",
          fontWeight: 800,
          fontSize: "2rem",
          letterSpacing: "2px"
        }}>
          Create Account
        </h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #f8bbd0",
              fontSize: "1rem",
              background: "#fff0f6",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            required
            onFocus={e => e.target.style.borderColor = "#ff6b6b"}
            onBlur={e => e.target.style.borderColor = "#f8bbd0"}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #f8bbd0",
              fontSize: "1rem",
              background: "#fff0f6",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            required
            onFocus={e => e.target.style.borderColor = "#ff6b6b"}
            onBlur={e => e.target.style.borderColor = "#f8bbd0"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1.5px solid #f8bbd0",
              fontSize: "1rem",
              background: "#fff0f6",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            required
            onFocus={e => e.target.style.borderColor = "#ff6b6b"}
            onBlur={e => e.target.style.borderColor = "#f8bbd0"}
          />
          <button
            type="submit"
            style={{
              padding: "13px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg,#ff6b6b 0%, #ff000d 100%)",
              color: "white",
              fontWeight: 700,
              fontSize: "1.05rem",
              cursor: "pointer",
              boxShadow: "0 2px 12px rgba(255,107,107,0.10)",
              transition: "background 0.2s"
            }}>
            Register
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "1rem", color: "#ff6b6b" }}>
          Already have an account?{" "}
          <Link to="/log" style={{ color: "#ff000d", fontWeight: 700, textDecoration: "underline" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}*/

























import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import regphoto from "./assets/reg-img.jpg";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) {
      alert("Email already exists");
      return;
    }

    const newUser = { name, email, password };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    try {
      await axios.post("oneprodex3.up.railway.app/api/auth/register", newUser);
    } catch (err) {
      console.log("MongoDB API error:", err);
    }

    alert("Registration successful");
    navigate("/log");
  };

  // ---- BACKGROUND SPLIT DESIGN ----
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff6f6",
    }}>
      <div style={{
        display: "flex",
        width: "720px",
        maxWidth: "98vw",
        minHeight: "60vh",
        background: "white",
        borderRadius: "18px",
        boxShadow: "0 8px 32px rgba(255,107,107,0.13)",
        overflow: "hidden",
      }}>
        {/* Image Side */}
        <div style={{
          flex: 1,
          background: "#fff0f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "36px 12px"
        }}>
          <img
            src= {regphoto}   
            alt="Register Art"
            style={{
              width: "85%",
              maxWidth: "340px",
              borderRadius: "25px",
              boxShadow: "0 2px 16px rgba(255,107,107,0.10)",
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
            color: "#ff6b6b",
            fontWeight: 800,
            fontSize: "2rem",
            letterSpacing: "2px"
          }}>
            Register
          </h2>
          <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "18px", width: "100%" }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1.5px solid #f8bbd0",
                fontSize: "1rem",
                background: "#fff0f6",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              required
              onFocus={e => e.target.style.borderColor = "#ff6b6b"}
              onBlur={e => e.target.style.borderColor = "#f8bbd0"}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1.5px solid #f8bbd0",
                fontSize: "1rem",
                background: "#fff0f6",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              required
              onFocus={e => e.target.style.borderColor = "#ff6b6b"}
              onBlur={e => e.target.style.borderColor = "#f8bbd0"}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1.5px solid #f8bbd0",
                fontSize: "1rem",
                background: "#fff0f6",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              required
              onFocus={e => e.target.style.borderColor = "#ff6b6b"}
              onBlur={e => e.target.style.borderColor = "#f8bbd0"}
            />
            <button
              type="submit"
              style={{
                padding: "13px",
                borderRadius: "8px",
                border: "none",
                background: "linear-gradient(90deg,#ff6b6b 0%, #ff000d 100%)",
                color: "white",
                fontWeight: 700,
                fontSize: "1.05rem",
                cursor: "pointer",
                boxShadow: "0 2px 12px rgba(255,107,107,0.10)",
                transition: "background 0.2s"
              }}>
              Register
            </button>
          </form>
          <p style={{ marginTop: "20px", fontSize: "1rem", color: "#ff6b6b" }}>
            Already have an account?{" "}
            <Link to="/log" style={{ color: "#ff000d", fontWeight: 700, textDecoration: "underline" }}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











/*import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Reg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // API call to backend
      const res = await fetch("http://localhost:7000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      // Save user in localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Registration successful");
      navigate("/log");
    } catch (err) {
      console.error(err);
      alert("Error during registration");
    }
  };

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      height: "100vh", background: "linear-gradient(135deg, #FF6B6B, #FF000D)"
    }}>
      <div style={{
        background: "white", padding: "40px", borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)", width: "350px", textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#FF000D" }}>Register</h2>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                 style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} required />
          <button type="submit"
                  style={{ padding: "10px", borderRadius: "6px", border: "none", background: "#FF000D", color: "white", cursor: "pointer" }}>
            Register
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/log" style={{ color: "#FF6B6B" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}*/












/*import React, { useState } from "react";

export default function Reg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      alert("هذا البريد مسجل من قبل ❌");
      return;
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("تم إنشاء الحساب بنجاح ✅ يمكنك تسجيل الدخول الآن");
  };

  return (
    <form onSubmit={handleRegister} style={{ margin: "20px" }}>
      <h2>إنشاء حساب جديد</h2>
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
      <button type="submit">تسجيل</button>
    </form>
  );
}*/

