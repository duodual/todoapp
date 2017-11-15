'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/todoController');

  // todoList Routes
  app.route('/test')
    .get(todoList.getTest)
    .post(todoList.postTest);
};
