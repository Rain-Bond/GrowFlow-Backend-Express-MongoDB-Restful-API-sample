'use strict';

module.exports = function(app) {
  const customer = require('../controllers/customerController');
  const employee = require('../controllers/employeeController');

  // Customer Routes
  app.route('/customer')
    .get(customer.get_all)
    .post(customer.create_a_customer);

  app.route('/customer/:id')
    .get(customer.get_a_customer)
    .put(customer.update_a_customer)
    .delete(customer.delete_a_customer);
 
  // Employee Routes
  app.route('/employee')
    .get(employee.get_all)
    .post(employee.create_a_employee);

  app.route('/employee/:id')
    .get(employee.get_a_employee)
    .put(employee.update_a_employee)
    .delete(employee.delete_a_employee);
};