import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async () => {
    try {
      const endpoint = isSignup ? "signup" : "login";

      const res = await fetch(`http://localhost:3002/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong!");
        return;
      }

      if (isSignup) {
        alert(data.message || "Signup successful!");
        setIsSignup(false);
      } else {
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "http://localhost:3001"; // redirect to dashboard
        } else {
          alert(data.message || "Invalid credentials!");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Make sure backend is running!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isSignup ? "Signup" : "Login"}</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />
      <br />

      <button
        onClick={handleSubmit}
        style={{ margin: "10px", padding: "8px 16px", cursor: "pointer" }}
      >
        {isSignup ? "Signup" : "Login"}
      </button>

      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsSignup(!isSignup)}
          style={{
            border: "none",
            background: "none",
            color: "blue",
            cursor: "pointer",
          }}
        >
          {isSignup ? "Login" : "Signup"}
        </button>
      </p>
    </div>
  );
}

export default App;
