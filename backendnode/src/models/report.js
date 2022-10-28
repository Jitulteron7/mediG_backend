const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Report = new mongoose.Schema({
    report_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    type:{
        type: String,
        required: true 
    },
    review:{
        type: String,
        required: true
    },
    laboratory_licence:{
        type: String,
        required: true
    },
    patient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Report',Report);