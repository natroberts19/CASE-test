var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var NotesSchema = new Schema({
    // studentId: {
    //     type: Number,
    //     unique: true,
    //     validate: [
    //         // Function takes in the new `longstring` value to be saved as an argument
    //         function (input) {
    //         // If this returns true, proceed. If not, return the error message below
    //             return input.length = 7;
    //         },
    //         // Error Message
    //         "Student Id must be 7 digits."
    //     ]
    // },
    advisorName: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    typeContact: {
        type: String,
        trim: true,
        required: "String is Required"
    },

    note: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    files: Array,
    date: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
var Notes = mongoose.model("Notes", NotesSchema);

// Export the Headline model
module.exports = Notes;