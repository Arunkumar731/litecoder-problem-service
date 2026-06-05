const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Title can not be empty"]

    },
    description : {
        type : String,
        required: [true, 'Description Should be provided'] 
    },
    difficulty :{
        type: String,
        enum : ['easy', 'medium', 'hard'],
        required : [true, 'providing Difficulty level is mandatory'],
        default : 'easy'
    },
    tags : {
        type : Array,
        required : [true, 'give a proper tag to the question']
    },
    testCases:[
        {
            input :{
                type : String,
                required : true
            },
            output :{
                type : String
            }
        }
    ],
    editorial : {
        type: String
    },
    constrains : {
        type: String,
        required: true
    },
    hints:{
        type : String
    }

});

const problem = mongoose.model('problem',ProblemSchema);

module.exports = problem;





