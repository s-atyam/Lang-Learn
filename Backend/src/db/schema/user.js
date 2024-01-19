const mongoose = require('mongoose')
const { Schema } = mongoose;

// this schema is for user 
const userSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    pass : {
        type:String,
        required:true
    },
    level:{
        type:Number,
        default:0
    },
    testTaken:{
        type:Number,
        default:0
    },
    xp:{
        type:Number,
        default:0
    },
    correctAns:{
        type:Number,
        default:0
    },
    wrongAns:{
        type:Number,
        default:0
    },
    notAns:{
        type:Number,
        default:0
    },
    attemped:[mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('User',userSchema);