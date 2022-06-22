'use strict';

const mongoose = require('mongoose'),

Employee = mongoose.model('Employee');

// CRUD actions for "Employee" entity
exports.get_all = function(req, res) {
  console.log(req);
    Employee.find({}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.create_a_employee = function(req, res) {
    var new_employee = new Employee(req.body);
    new_employee.save(function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.get_a_employee = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.update_a_employee = function(req, res) {
    Employee.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

  exports.delete_a_employee = function(req, res) {
   Employee.remove({_id: req.params.id}, function(err
    // , employee
    ) {
      if (err)
        res.send(err);
      res.json({ message: 'Employee entry successfully deleted' });
    });
  };
