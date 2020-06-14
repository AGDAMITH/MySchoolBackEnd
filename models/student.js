const mongoose = require('mongoose')

const schea = new mongoose.Schema({
    name: String,
    dob: Date,
    grade: Number,
    m_name: String,
    f_name: String,
    address: String
});

module.exports =  mongoose.model('Student', schea);