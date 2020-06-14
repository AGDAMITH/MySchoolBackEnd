const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tname: String,
    tbday: Date,
    subject: String,
    address: String
});

module.exports =  mongoose.model('Teacher', schema );