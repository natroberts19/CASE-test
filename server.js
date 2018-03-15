// Dependencies.
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var axios = require("axios");

// Set up the Express server.
var app = express();
// Set up the PORT.
var PORT = process.env.PORT || 8080;

// Require all models.
// var db = require("./models");

// Configure the middleware, Morgan logger for logging requests.
// app.use(logger("dev"));

// Use body parsing for comment submission.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Static directory.
app.use(express.static("public"));

// ----- DATABASE CONFIG -----
var databaseUri = 'mongodb://localhost/mongoHeadlines';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}
// ----- END DATABASE CONFIG -----

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead.
// Connect to MONGOOSE
var db = mongoose.connection;

// Show errors.
db.on('error', function(err) {
  console.log('Mongoose error: ', err);
});

// Log a success message.
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Routes.
// require("./routes/html-routes.js")(app);
// require("./routes/api-scrape-routes.js")(app);
// require("./routes/api-note-routes.js")(app);

// Listen on PORT.
app.listen(PORT, function() {
  console.log("App running!");
});
