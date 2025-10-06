import React, { useEffect, useState } from "react";

const Footer = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken"); // Retrieve the token from localStorage
    setToken(storedToken); // Store the token in state
  }, []);

  return (
    <div
      className="footer"
      style={{
        backgroundColor: "black",
        color: "whitesmoke",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        className="left-footer"
        style={{
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        MyPortfolio
      </div>
      <div className="mid-footer">
        Thanks for visiting my portfolio.
      </div>
      <div className="right-footer">
        {token ? (
          <a
            href="/dashboard"
            target="_blank"       
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </a>
        ) : (
          <p>Login to access the dashboard</p>
        )}
      </div>
    </div>
  );
};

export default Footer;
