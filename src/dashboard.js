import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./dashboard.css";
import record from "../components/record";
import items from "../components/items";
import login from "../components/login";
import edit from "../components/edit"


function dashboard() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/record" element={<record />} />
          <Route path="/items" element={<items />} />
          <Route path="/edit" element={<edit />} />
                 </Routes>
      </Router>
    </>
  );
}

export default dashboard;