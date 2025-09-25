 /* import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
      
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#f5f5f5",
          marginTop: "30px",
        }}
      >
        All rights reserved 2025 © by Eng.yassa hanna
      </footer>
    </div>
  );
} */





















  import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
      
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#f5f5f5",
          marginTop: "30px",
        }}
      >
        All rights reserved 2025 © by Eng.yassa hanna
      </footer>

      {/* سهم الصعود لأعلى */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            transition: "all 0.3s ease",
            animation: "bounce 2s infinite",
            zIndex: 1000,
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
          }}
        >
          ↑
        </button>
      )}

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </div>
  );
}





























/*import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./RTK/store";
import Navbar from "./Navbar";
import Log from "./Log";
import Reg from "./Reg";
import Cart from "./Cart";

export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home"); // home | login | register | cart

  useEffect(() => {
    // تحميل المستخدم المخزن
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    if (user) {
      // مسح الكارت من الذاكرة فقط، مش من localStorage
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar user={user} onLogout={handleLogout} setPage={setPage} />

        <div style={{ margin: "20px" }}>
          {page === "home" && <h2>مرحبًا بك في موقعنا 🎉</h2>}
          {page === "login" && <Log setUser={setUser} />}
          {page === "register" && <Reg />}
          {page === "cart" && user && <Cart />}
          {page === "cart" && !user && <p>يجب تسجيل الدخول لعرض الكارت</p>}
        </div>
      </div>
    </Provider>
  );
}*/

