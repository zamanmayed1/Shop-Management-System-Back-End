const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_URL_LOCAL).then(() => {
  console.log("Database connection success".bgYellow);
}).catch(err => {
  console.error(`Database connection error: ${err.message}`.bgRed);
});

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
