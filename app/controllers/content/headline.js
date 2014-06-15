var Headline = require('../../models/content/headline').model;

exports.getAll = function(cb){
  Headline.find({}, cb);
};

exports.upload = function(json, cb){
  var headline = new Headline(json);
  headline.save(cb);
};

