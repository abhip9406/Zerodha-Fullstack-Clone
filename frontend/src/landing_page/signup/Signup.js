import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup
  ? 'https://zerodha-fullstack-clone-34y6.onrender.com/api/signup'
  : 'https://zerodha-fullstack-clone-34y6.onrender.com/api/login';

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (isSignup) {
        alert(data.message || "Signup successful!");
      } else {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Login successful!");
          window.location.href = "https://zerodha-dashboard-v60e.onrender.com"; // dashboard
        } else {
          alert(data.message || "Invalid credentials");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center">
          {isSignup
            ? "Open a free demat and trading account online"
            : "Welcome back! Login to your account"}
        </h1>
        <p className="fs-5 mt-3 text-center text-muted">
          {isSignup
            ? "Start investing brokerage free and join a community of 1.6+ crore investors and traders"
            : "Enter your credentials to access your dashboard"}
        </p>
      </div>

      <div
        className="row p-5 mt-5 text-muted align-items-center"
        style={{ fontSize: "1rem", lineHeight: "1.8" }}
      >
        <div className="col-md-6 p-5 text-center">
          <img
            src="media/images/account_open.svg"
            alt="Account Open"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6 p-5">
          <h2 className="signup-head mb-2">
            {isSignup ? "Sign up now" : "Login"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              {isSignup ? "Sign Up →" : "Login →"}
            </button>

            <p className="mt-3 text-center">
              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Login" : "Signup"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
