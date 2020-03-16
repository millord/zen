const express = require("express");
require("dotenv").config();
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

// middlewares
app.use(express.json());
app.use(morgan("tiny"));

//routes middleware
app.use("/api/post", postRoutes);
app.use("/api/user", authRoutes);

// connect to db
mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log(`DB connected`)
);

// start listenting to the server, port config include
app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);
