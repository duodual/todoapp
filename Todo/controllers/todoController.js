'use strict';

exports.getTest = function(req, res) {
  console.log(req.query);
  var test = req.query.para || '';
  res.json({'res': 'get response is ' + test});
};

exports.postTest = function(req, res) {
  var test = req.body.para || '';
  res.json({'res': 'post response is ' + test});
};
