var _ = require('underscore'),
    home = require('../app/controllers/home'),
    proposals = require('../app/controllers/proposals'),
    applications = require('../app/controllers/applications'),
    uploader = require('../app/controllers/content/uploader');

// Stores a dictionary with route paths as keys and their corresponding static html files as values.
var URLToFileMap = {
  '/video': 'sections/video',
  '/politics': 'sections/politics',
  '/sports': 'sections/sports',
  '/science': 'sections/science',
  '/contribute': 'sections/contribute',
  '/application': 'sections/application',
  '/uploader': 'content/uploader'
};

// Renders the proper web page for all static pages by parsing the route from the req object.
var renderStaticPage = function(req, res){
  res.render(URLToFileMap[req.route.path], {
      title: 'The Seed - Only the Truth*'
  });
};

module.exports = function(app){
/* Client Routes */
  // All static pages
  _.each(URLToFileMap, function(value, key){
    app.get(key, renderStaticPage);
  });

  app.get('/', home.index);
  app.post('/headline/proposal', proposals.processProposal);
  app.post('/application', applications.processApplication);

  // Uploading
  app.post('/upload/image', uploader.uploadImage);
  app.post('/upload/article', uploader.uploadArticle);
  app.post('/upload/headline', uploader.uploadHeadline);
};
