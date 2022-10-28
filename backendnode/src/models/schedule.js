const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Schedule = new mongoose.Schema({
    schedule_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    time:{
        type: Date,
        required: true 
    },
    status:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Schedule',Schedule);