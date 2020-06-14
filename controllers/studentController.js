const Student = require('../models/student');
const { response } = require('..');
const student = require('../models/student');

exports.create = function (req, res) {
    const newStu = new Student(req.body);
    newStu.save((err,doc)=>{
        res.json(doc);
    })
}

exports.get = function (req, res) {
    Student.findById(req.params.id, (err,doc)=>{
        res.json(doc);
    })
}

exports.getAll = function (req,res){
    console.log('called');
    Student.find((err,docs)=>{
        res.json(docs);
    })
}

exports.update = function (req, res) {
    Student.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err,doc)=>{
        res.json(doc);
    })
}

exports.delete = function (req, res) {
    Student.findByIdAndDelete(req.params.id, (err,doc)=>{
        res.json(doc);
    })
}

exports.search = function (req, res) {
    Student.find(
        { name: {$regex: ".*"+ req.body.term +".*", option: "-i"}},
        (err, payload) => responseService.handleResponse(res, err, payload)
        )
}