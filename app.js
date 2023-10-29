const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
app.use(express.json());

app.use("/posts", postsRoutes);

//// errorhandling middleware
app.use((error, req, res, next) => {
  res.status(500).json(error.message);
});
// /////errormsg not working!

//// notfound
app.use((req, res, next) => {
  res.status(404).json({ msg: "path not found" });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
