import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
      return setError("User not found.");
    }

    if (user.password !== password) {
      return setError("Invalid credentials.");
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "/dashboard";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Login</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/create" style={{ color: "#3f5efb" }}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
