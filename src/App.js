import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/1" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
