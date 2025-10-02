import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate for redirection
import "./App.css";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard"; // Import Dashboard Component
import ScrollToTop from "react-scroll-to-top";

// PrivateRoute Component to protect the dashboard
const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("authToken"); // Retrieve JWT token from localStorage

  if (!token) {
    // If no token, show an alert message and redirect to the login page
    alert("Please login to access the dashboard");
    return <Navigate to="/" replace />; // Redirect to login page
  }

  // If the token exists, render the requested element (Dashboard)
  return element;
};

function App() {
  return (
    <Router>
      <>
        {/* Main Layout for Portfolio */}
        <Routes>
          <Route path="/" element={<Layout />} />
          
          {/* Protect Dashboard route with PrivateRoute */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
        </Routes>
        <ScrollToTop smooth />
      </>
    </Router>
  );
}

export default App;
