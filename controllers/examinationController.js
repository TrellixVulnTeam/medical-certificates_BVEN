var Examination = require('../models/examination');

//const { Sequelize, DataTypes } = require('sequelize');


exports.add_new_examination_get = async function(req, res){
    res.render('add-examination');
}

exports.add_new_examination_post = async function(req, res){
    let examination = Examination.build(req.body);

    examination.save().then( (result)=>{
        console.log(result);
        res.redirect('/');
    }, (result) => {
        console.log(result);
    });
 
}