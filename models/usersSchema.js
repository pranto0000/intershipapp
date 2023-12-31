const mongoose = require('mongoose');
const validator = require('validator');


const usersSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trime:true
    },
    lname:{
        type:String,
        required:true,
        trime:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw Error("not a valid email")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:11,
        maxlength:11
    },
    gender:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    datecreated:Date,
    dateUpdated:Date,
    
})

// model 
const users = new mongoose.model("users",usersSchema);
module.exports = users;