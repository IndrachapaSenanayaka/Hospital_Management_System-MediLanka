const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    gender : {
        type: String,
        required:[true, "Please Enter Gender"] 
    },
    fname : {
        type: String,
        required:[true, "Please Enter First Name"] 
    },
    lname : {
        type: String,
        required:[true, "Please Enter Last Name"] 
    },
    nic : {
        type: String,
         required:[true, "Please Enter NIC"] 
    },
    specialization : {
        type: String,
        required:[true, "Please Enter Specialization"] 
    },
    number : {
        type: String,
        required:[true, "Please Enter Number"] 
    },
    email : {
        type: String,
        required: [true, "Please Enter Email"] 
    },
    password : {
        type: String,
        required:[true, "Please Enter Password"] 
    },
    province : {
        type: String,
        required:[true, "Please Enter Province"] 
    },
    city : {
        type: String,
        required:[true, "Please Enter City"] 
    },
    street : {
        type: String,
        required:[true, "Please Enter Street"] 
    },
    
    pcode : {
        type: String,
        required:[true, "Please Enter Postal Code"] 
    },
    img : {
        type: String,
        required:[true, "Please Upload Image"] 
    }

})

const staff = mongoose.model("staff", staffSchema );

module.exports = staff;