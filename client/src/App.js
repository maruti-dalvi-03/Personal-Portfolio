import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard"; // Import Dashboard Component
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <>
        {/* Main Layout for Portfolio */}
        <Routes>
          <Route path="/" element={<Layout />} />
          
          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ScrollToTop smooth />
      </>
    </Router>
  );
}

export default App;
