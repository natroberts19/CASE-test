
// ALL the Routes

module.exports = function(app) {

        // 1. At the root path, send a simple hello world message to the browser
        app.get("/", function(req, res) {
            res.send("Hello world");
        });

        // 2. At the "/all" path, display every entry in the students collection
        app.get("/all", function(req, res) {
            // Query: In our database, go to the students collection, then "find" everything
            db.students.find({}, function(error, found) {
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

         // 3. At the "/name" path, display every entry in the animals collection, sorted by name
        app.get("/lastName", function(req, res) {
            // Query: In our database, go to the animals collection, then "find" everything,
            // but this time, sort it by name (1 means ascending order)
            db.students.find().sort({ name: 1 }, function(error, found) {
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

        
        // 4. At the "/weight" path, display every entry in the animals collection, sorted by weight
        app.get("/firstName", function(req, res) {
            // Query: In our database, go to the animals collection, then "find" everything,
            // but this time, sort it by weight (-1 means descending order)
            db.students.find().sort({ weight: 1 }, function(error, found) {
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

  }
 

  
  
  
 
  