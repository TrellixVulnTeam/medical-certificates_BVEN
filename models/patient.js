//const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db-connect');
const { DataTypes } = require("sequelize");
//const Examination = require('examination');

const Patient = sequelize.define('Patient', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  birthDate: {
    type: DataTypes.DATEONLY
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  employer: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  jobDescription: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  additionalDetails: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});


module.exports = Patient;

//Patient.hasMany(Examination);