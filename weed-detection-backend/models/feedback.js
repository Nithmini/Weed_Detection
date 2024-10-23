const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FeedbackSchema = new Schema({

name :{
    type: String,
},

description :{
    type: String, 
},

emoji:{
    type: String,
},


},{ timestamps: true });


const Feedback = mongoose.model("Feedbacks", FeedbackSchema);
module.exports = Feedback;

