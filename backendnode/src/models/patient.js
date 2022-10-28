const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Patient = new mongoose.Schema({
    patient_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    name:{
        type: String,
        required: true 
    },
    phone_number:{
        type: Number,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    doctor_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },
    symptoms:[
        {
            type: String,
            required: true
        }
    ],
    date_of_visit:{
        type: Date,
        required: true
    },
    date_of_recovery:{
        type: Date,
        required: true
    },
    status:{
        type : String, 
        required : true
    },
    presciption_id:{
        type : String,
        required : true
    },
    password:{
        type: String,
        required : true
    }
},{
    timestamps:true
})

Patient.pre('save', async function (next) {
    let patient = this;

    if (!patient.isModified('password')) return next();

    const hash = await bcrypt.hashSync(patient?.password, 8);

    patient.password = hash;
    return next();
});

module.exports = mongoose.model('Patient',Patient);