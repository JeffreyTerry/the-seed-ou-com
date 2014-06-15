var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
  paragraphs: {type: [String], required: true},
  headline: {type: String, required: true},
  photoUrl: String
});

exports.model = mongoose.model('news', newsSchema);




