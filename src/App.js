import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenusPage from "../src/Pages/MenusPage";
import HomePage from "./Pages/HomePage";
import ScrollTop from "./ScrollTop";

export default function App() {
  return (
    <Router>
      <ScrollTop />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/moremenu" element={<MenusPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
