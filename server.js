const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')


app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define middleware here
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(logger("dev"));

// Define API routes here

app.use(routes)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect("mongodb://localhost/bookSearcher", { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
