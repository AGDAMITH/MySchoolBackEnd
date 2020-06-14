const Teacher = require('../models/teacher')

exports.create = function (req, res) {
    console.log('created');
    const newTeach = new Teacher(req.body);
    newTeach.save((err,doc)=>{
        res.json(doc);
    })
}

exports.get = function (req, res) {
    Teacher.findById(req.params.id, (err,doc)=>{
        res.json(doc);
    })
}

exports.getAll = function (req,res){
    console.log('called');
    Teacher.find((err,docs)=>{
        res.json(docs);
    })
}

exports.update = function (req, res) {
    Teacher.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err,doc)=>{
        res.json(doc);
    })
}

exports.delete = function (req, res) {
    Teacher.findByIdAndDelete(req.params.id, (err,doc)=>{
        res.json(doc); 
    })
}

