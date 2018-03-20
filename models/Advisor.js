var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object.
var AdvisorSchema = new Schema({
  advisorName: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  username: {
    type: String,
    trim: true,
    required: "String is Required"
  },
   password: {
    type: String,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument.
      function(input) {
        // If this returns true, proceed. If not, return the error message below.
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  activeAssigned: {
    type: Number,
    required: true
  },
  inactiveAssigned: {
    type: Number,
    required: true
  },
  msgoGoal: {
    type: Number,
    required: true
  },
  msgoCurrent: {
    type: Number,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

// This creates our model from the above schema, using mongoose's model method
var Advisor = mongoose.model("Advisor", AdvisorSchema);

// Export the Headline model
module.exports = Advisor;
