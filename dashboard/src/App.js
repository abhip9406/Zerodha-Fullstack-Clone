import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "https://zerodha-frontend.onrender.com";
      return;
    }

    fetch("https://zerodha-fullstack-clone-34y6.onrender.com/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setMessage(data.message);
        else window.location.href = "https://zerodha-frontend.onrender.com";
      })
      .catch(() => window.location.href = "https://zerodha-frontend.onrender.com");
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "https://zerodha-frontend.onrender.com";
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