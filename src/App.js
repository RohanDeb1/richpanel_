import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";
import Payments from "./components/Payments/Payments";
import Current from "./components/CurrentPlans/Current";
import Yearly from "./components/Home/Yearly";
import Cancel from "./components/CurrentPlans/Cancel";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          

          <Route
            path="/login"
            element={<Navigate to="/home" />} // Redirect to home page
          />

          {/* Home page */}
          <Route path="/home" element={<Home />} />
          <Route path="/yearly" element={<Yearly />} />
          
          {/* Payments page */}
          <Route path="/payments" element={<Payments />} />

          {/* Current page */}
          <Route path="/current" element={<Current />} />

          <Route path="/cancel" element={<Cancel />} />

          {/* Redirect all other routes to the login page */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
