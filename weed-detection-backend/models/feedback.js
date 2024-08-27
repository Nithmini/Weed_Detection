const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema({


    name: {
        type: String,
    },
    feedback: {
        type: String,
    },

}, { timestamps: true });
const Feedback = mongoose.model("Feedbacks", FeedbackSchema);
module.exports = Feedback;