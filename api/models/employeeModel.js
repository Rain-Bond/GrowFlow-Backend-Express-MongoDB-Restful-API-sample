'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: 'error: please enter first name'
  },
  lastName: {
    type: String,
    required: 'error: please enter last name'
  },
  role: {
    type: String,
    required: 'error: please enter role'
  },
  email: {
    type: String,
    required: 'error: please enter email'
  },
  telephone: {
    type: String,
    required: 'error: please enter telephone number'
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);