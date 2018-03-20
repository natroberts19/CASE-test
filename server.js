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
var db = require("./models");

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

// Error logging.
db.on("error", function(err) {
  console.log("Mongoose Error:", err);
});

// Log a success message.
db.once('open', function() {
    console.log('Mongoose connection successful.');
  });

// ROUTES.
// require("./routes/html-routes.js")(app);
// require("./routes/api-student-routes.js")(app);
// require("./routes/api-note-routes.js")(app);

// Pull these queries out and create models and separate routes.
app.get("/", function(req, res) {
    res.send(index.html);
  });

// At the "/all" path, display every entry in the students collection.
app.get("/all", function(req, res) {
  // Query: In our database, go to the students collection, then "find" everything.
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

// Find students by logged in advisor. Hardcoded for now.
app.get("/advisor", function(req, res) {
    db.students.find({ $and: [ { studentStatus: { $eq: 'active' } }, { advisor: { $eq: 'Natalie' } } ]}, function(error, found) {
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

// At the "/lastName" path, display every entry in the students collection, sorted by last name.
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


// At the "/firstName" path, display every entry in the students collection, sorted by first name.
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

// At the "/contacts" path, display every entry in the students collection with less than 2 contacts.
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

// At the /api/new endpoint, capture all new student form submissions.
// Handle form submission, save submission to mongo
app.post("/api/new", function(req, res) {
    console.log("new stud req.body: ", req.body);
    // Insert the form data into the students collection.
    db.students.insert(req.body, function(error, saved) {
      // Log any errors
      if (error) {
        console.log(error);
      }
      else {
        // This will fire off the success function of the ajax request
        res.send(saved);
      }
    });
  });



// Listen on PORT.
app.listen(PORT, function() {
  console.log("App running!");
});
