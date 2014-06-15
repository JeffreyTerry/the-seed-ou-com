var Article = require('../../models/content/article').model;

exports.getAll = function(cb){
  Article.find({}, cb);
};

exports.upload = function(json, cb){
  if(json.hasOwnProperty('article')){
    json.paragraphs = json.article.split('&br&');
    json.article = undefined;
    delete json.article;
  }
  var article = new Article(json);
  article.save(cb);
};

