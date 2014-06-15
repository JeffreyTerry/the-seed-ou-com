var latest = require('../../models/content/latest').model;

exports.getAll = function(cb){
  latest.find({}, cb);
};



