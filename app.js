const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const app = express();

//Allowing cross origin requests
app.use(cors());

app.use(
  express.json({
    limit: "15kb",
  })
);

//handle undefined Routes
app.use("*", (req, res, next) => {
  const err = new AppError(404, "fail", "undefined route");
  next(err, req, res, next);
});

module.exports = app;
