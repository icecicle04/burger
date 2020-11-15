const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

let PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://burgeruser:burgeruser@cluster0.odyun.mongodb.net/burger-app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);
// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgersController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
//add mongouri
