const express = require("express");

const connectDB = require("./config/db");

require("dotenv").config();

const authRoutes = require("./routes/auth.routes");

const privateRoutes = require("./routes/private.routes");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working now");
});

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", privateRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
