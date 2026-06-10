import React, { useState, useEffect } from "react";

function App() {

  // Step 1: Create state variables
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Fetch data using useEffect
  useEffect(() => {

    fetch("https://api.github.com/users/manesakshi1210")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f2f4f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >

        <h1 style={{ color: "#333" }}>
          GitHub Profile
        </h1>

        <hr />

        {/* Loading State */}
        {isLoading && (
          <h3 style={{ color: "blue" }}>
            Loading...
          </h3>
        )}

        {/* Error State */}
        {error && (
          <h3 style={{ color: "red" }}>
            Error: {error.message}
          </h3>
        )}

        {/* User Data */}
        {userData && (
          <div>

            <img
              src={userData.avatar_url}
              alt="User Avatar"
              width="120"
              style={{
                borderRadius: "50%",
                marginTop: "15px",
                border: "3px solid #0077cc",
              }}
            />

            <h2 style={{ marginTop: "15px", color: "#222" }}>
              {userData.name}
            </h2>

            <p style={{ color: "#555" }}>
              <strong>Bio:</strong> {userData.bio}
            </p>

            <p>
              <strong>Location:</strong> {userData.location}
            </p>

            <p>
              <strong>GitHub ID:</strong> {userData.login}
            </p>

            <p>
              <strong>Followers:</strong> {userData.followers}
            </p>

            <a
              href={userData.html_url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#0077cc",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
              }}
            >
              Visit GitHub Profile
            </a>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;