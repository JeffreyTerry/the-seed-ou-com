var mongoose = require('mongoose');

var headlineSchema = mongoose.Schema({
  headline: {type: String, required: true},
  date: {type: Date, required: true},
  image: {type: String}
});

exports.model = mongoose.model('headline', headlineSchema);




