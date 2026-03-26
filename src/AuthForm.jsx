import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // ✅ FIXED POSITION

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert(isLogin ? "Login Successful" : "Signup Successful");
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* LOGIN FORM */}
          {isLogin ? (
            <div className="form">
              <h2>Login Form </h2>

              {/* ✅ ADDED ERROR HERE */}
              {error && <div className="error-box">{error}</div>}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <a href="#" onClick={(e) => e.preventDefault()}>
                Forgot Password
              </a>

              <button onClick={handleSubmit}>Login</button>

              <p>
                Not a member?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                >
                  SignUp Now
                </a>
              </p>
            </div>
          ) : null}

          {/* SIGNUP FORM */}
          {!isLogin ? (
            <div className="form">
              <h2>SignUp </h2>

              {error && <div className="error-box">{error}</div>}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}   // ✅ FIXED
                onChange={(e) => setConfirmPassword(e.target.value)} // ✅ FIXED
              />

              <button onClick={handleSubmit}>Sign Up</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default AuthForm;