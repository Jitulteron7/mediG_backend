const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Medicine = new mongoose.Schema({
    medicine_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    name:{
        type: String,
        required: true 
    },
    symtoms:[{
        type: String,
        required: true
    }],
    schedules:[{
        type: mongoose.Types.ObjectId,
        required: true
    }]
},{
    timestamps:true
})

module.exports = mongoose.model('Medicine',Medicine);