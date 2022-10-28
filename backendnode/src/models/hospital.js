const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const Hospital = new mongoose.Schema({
    hospital_id:{
        type: mongoose.Types.ObjectId,
        required: true   
    },
    hospital_licence:{
        type: String,
        required: true 
    },
    address:{
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
    }
},{
    timestamps:true
})

Hospital.pre('save', async function (next) {
    let hospital = this;

    if (!hospital.isModified('password')) return next();

    const hash = await bcrypt.hashSync(hospital?.password, 8);

    hospital.password = hash;
    return next();
});

module.exports = mongoose.model('Hospital',Hospital);