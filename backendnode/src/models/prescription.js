const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Prescription = new mongoose.Schema({
    prescription_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    patient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    },
    medicines:[{
        type : String,
        required : true
    }],
    time:{
        type: Date,
        required: true
    },
    doctor_signature:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Prescription',Prescription);