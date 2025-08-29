const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from free backend server!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rishikr620:Rishi@cgu@cluster0.xxxxx.mongodb.net/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Database connected successfully"))
.catch(err => console.error("❌ DB connection error:", err));
