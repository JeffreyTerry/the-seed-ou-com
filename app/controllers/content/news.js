var news = require('../../models/content/news').model;

exports.getAll = function(cb){
  news.find({}, cb);
};



