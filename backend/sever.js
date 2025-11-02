const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const orders = [];

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

const users = [];
const SECRET = "mysecret";

// SIGNUP
app.post("/api/signup", (req, res) => {
  console.log("🔥 Signup request received:", req.body); // debugging log
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "User already exists" });

  users.push({ email, password });
  res.json({ message: "Signup successful!" });
});

// LOGIN
app.post("/api/login", (req, res) => {
  console.log("Login request received:", req.body);
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// DASHBOARD
app.get("/api/dashboard", (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: "No token" });
  const token = auth.split(" ")[1];

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ message: `Welcome ${decoded.email}` });
  });
});

app.post("/newOrder", (req, res) => {
  const { name, qty, price, mode } = req.body;
  orders.push({ name, qty, price, mode });
  res.json({ message: "Order placed successfully" });
});

app.get("/allOrders", (req, res) => {
  res.json(orders);
});


app.listen(5000, () => console.log("Backend running on port 5000"));
