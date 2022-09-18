const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Setting up the .env path for dotenv cfg.
dotenv.config({
  path: "./config.env",
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down App...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

const database = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//Connecting to MongoDB
mongoose
  .connect(database, {
    //Comment
  })
  .then((con) => {
    console.log("DB connection established");
  });

//Starting Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!!  shutting down Server ...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
