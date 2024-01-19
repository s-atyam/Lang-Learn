const mongoose = require('mongoose')
const { Schema } = mongoose;

// this schema is for questions
const question = new Schema({
    lang:{
        type:String,
        default:'hindi'
    },
    text:{
        type:String,
        required:true
    },
    options:{
        type:[Object],
        required:true
    },
    correctOption:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Question',question);