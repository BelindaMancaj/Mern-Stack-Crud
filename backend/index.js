const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Belinda:Vloremoj@cluster0.oh73x.mongodb.net/books"
);

app.use("/api", require("./routes/bookRoutes"));

app.listen(8000, () => {
  console.log("Server is running...");
});
