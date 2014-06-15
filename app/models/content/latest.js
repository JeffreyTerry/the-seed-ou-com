var mongoose = require('mongoose');

var latestSchema = mongoose.Schema({
  headline: {type: String, required: true}
});

exports.model = mongoose.model('latest', latestSchema);




