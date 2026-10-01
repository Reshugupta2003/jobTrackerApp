const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    company : {type:String, required:true}, 
    role : {type:String, required:true}, 
    link :{type:String},
    status :{
        type:String,
        enum:["Applied", "Interview", "Rejected", "Offer"],
        defult:"Applied",
    },
    appliedDate: {type:Date, default:Date.now},
},{ timestamps: true }); 

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;