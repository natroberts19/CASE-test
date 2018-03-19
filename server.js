// Dependencies.
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var mongojs = require("mongojs");
var path = require("path");
var axios = require("axios");

// Set up the Express server.
var app = express();
// Set up the PORT.
var PORT = process.env.PORT || 3000;

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
// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "case";
var collections = ["students"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Routes.
// require("./routes/html-routes.js")(app);
// require("./routes/api-student-routes.js")(app);
// require("./routes/api-note-routes.js")(app);

// Pull these queries out and create models and separate routes.
// 1. At the "/all" path, display every entry in the students collection.
app.get("/all", function(req, res) {
  // Query: In our database, go to the students collection, then "find" everything
  db.students.find({}, function(error, found) {
  // Log any errors if the server encounters one.
  if (error) {
      console.log(error);
  }
  // Otherwise, send the result of this query to the browser.
  else {
      res.json(found);
  }
  });
});

// 2. At the "/lastName" path, display every entry in the students collection, sorted by last name.
app.get("/lastName", function(req, res) {
  db.students.find().sort({ lastName: 1 }, function(error, found) {
  // Log any errors if the server encounters one
  if (error) {
      console.log(error);
  }
  // Otherwise, send the result of this query to the browser
  else {
      res.json(found);
  }
  });
});


// 3. At the "/firstName" path, display every entry in the students collection, sorted by first name.
app.get("/firstName", function(req, res) {
  db.students.find().sort({ firstName: 1 }, function(error, found) {
  // Log any errors if the server encounters one.
  if (error) {
      console.log(error);
  }
  // Otherwise, send the result of this query to the browser.
  else {
      res.json(found);
  }
  });
});

// 4. At the "/contacts" path, display every entry in the students collection with less than 2 contacts.
app.get("/contacts", function(req, res) {
    db.students.find( { numContacts: { $lt: 2 } }, function(error, found) {
    // Log any errors if the server encounters one.
    if (error) {
        console.log(error);
    }
    // Otherwise, send the result of this query to the browser.
    else {
        res.json(found);
    }
    });
  });



// Listen on PORT.
app.listen(PORT, function() {
  console.log("App running!");
});
