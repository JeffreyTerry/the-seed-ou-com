var news = require('./content/news'),
    latest = require('./content/latest');

exports.index = function(req, res){
  news.getAll(function(err, newsArticles){
    if(err){
      console.log('Error loading news: ', err);
    }else{
      latest.getAll(function(err, latestStories){
        if(err){
          console.log('Error loading news: ', err);
        }else{
          res.render('home/home', {
            newsArticles: newsArticles,
            latestStories: latestStories
          });
        }
      });
    }
  });
};
