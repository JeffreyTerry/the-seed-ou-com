var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  paragraphs: {type: [String], required: true},
  headline: {type: String, required: true},
  date: {type: Date, required: true},
  image: {type: String}
});

exports.model = mongoose.model('article', articleSchema);




