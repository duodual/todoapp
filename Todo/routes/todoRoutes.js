'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/todoController');

  // todoList Routes
  app.route('/todo')
    .get(todoList.getTest)
    .post(todoList.postTest);
};
