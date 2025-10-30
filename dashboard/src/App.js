import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "http://localhost:3000";
      return;
    }

    fetch("http://localhost:3002/api/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) setMessage(data.message);
        else window.location.href = "http://localhost:3000";
      })
      .catch(() => window.location.href = "http://localhost:3000");
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
