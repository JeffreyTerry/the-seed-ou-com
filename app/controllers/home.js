var article = require('./content/article'),
    headline = require('./content/headline');

exports.index = function(req, res){
  article.getAll(function(err, articles){
    if(err){
      console.log('Error loading article: ', err);
    }else{
      headline.getAll(function(err, headlines){
        if(err){
          console.log('Error loading article: ', err);
        }else{
          res.render('home/home', {
            articles: articles,
            headlines: headlines
          });
        }
      });
    }
  });
};
