var fs = require('fs'),
    headline = require('./headline'),
    article = require('./article');

exports.uploadImage = function(req, res){
  req.pipe(req.busboy);
  req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype){
    var fstream = fs.createWriteStream(__dirname + '/../../../assets/imgs/content/' + filename);
    var fstream2 = fs.createWriteStream(__dirname + '/../../../public/imgs/content/' + filename);
    file.pipe(fstream);
    file.pipe(fstream2);
    fstream.on('close', function () {
      fstream2.on('close', function () {
        res.status(200).json({'msg': 'success'});
      });
    });
  });
};
exports.uploadArticle = function(req, res){
  article.upload(req.body, function(err, data){
    if(!err){
      res.status(200).json({'msg': 'success'});
    }else{
      res.status(500).json({'err': err});
    }
  });
};
exports.uploadHeadline = function(req, res){
  headline.upload(req.body, function(err, data){
    if(!err){
      res.status(200).json({'msg': 'success'});
    }else{
      res.status(500).json({'err': err});
    }
  });
};

