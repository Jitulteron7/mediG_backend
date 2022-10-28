const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Doctor = new mongoose.Schema({
    doctor_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    doctor_licence:{
        type: String,
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
    email_id:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    hospital_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital' 
    }
},{
    timestamps:true
})

Doctor.pre('save', async function (next) {
    let doctor = this;

    if (!doctor.isModified('password')) return next();

    const hash = await bcrypt.hashSync(doctor?.password, 8);

    doctor.password = hash;
    return next();
});

module.exports = mongoose.model('Doctor',Doctor);