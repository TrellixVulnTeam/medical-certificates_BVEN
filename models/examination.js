//const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db-connect');
const { DataTypes } = require("sequelize");

const Examination = sequelize.define('Examination', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  dateAndTime: {
    type: DataTypes.DATE
  },
  duration: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  patient: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  status: {
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


module.exports = Examination;