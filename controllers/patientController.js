var Patient = require('../models/patient');

//const { Sequelize, DataTypes } = require('sequelize');

exports.list_patients = async function(req, res){
    patients = await Patient.findAll({raw: true});
    res.json({'data':patients});
}


exports.add_new_patient_get = async function(req, res){
    res.render('add-patient');
}

exports.add_new_patient_post = async function(req, res){
    let patient = Patient.build(req.body);

    patient.save().then( (result)=>{
        console.log(result);
        res.redirect('/');
    }, (result) => {
        console.log(result);
    });
 
}