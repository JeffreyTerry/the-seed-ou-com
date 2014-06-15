var mongoose = require('mongoose');

var headlineSchema = mongoose.Schema({
  headline: {type: String, required: true},
  date: {type: Date, required: true}
});

exports.model = mongoose.model('headline', headlineSchema);




