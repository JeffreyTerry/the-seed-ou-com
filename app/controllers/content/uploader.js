var fs = require('fs'),
    headline = require('./headline'),
    article = require('./article'),
    bcrypt = require('bcrypt');

function authenticateRequest(req, options){
  bcrypt.compare(req.body.pass, process.env.SEED_UPLOAD_PASS_HASH, function(err, response){
    console.log(process.env.SEED_UPLOAD_PASS_HASH);
    console.log(err);
    if(err){
      if(options && options.error){
        options.error();
      }
    }else{
      if(options && options.success){
        options.success();
      }
    }
  });
}

exports.uploadImage = function(req, res){
  req.pipe(req.busboy);
  req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype){
    var fstream = fs.createWriteStream(__dirname + '/../../../assets/imgs/content/' + filename);
    var fstream2 = fs.createWriteStream(__dirname + '/../../../public/imgs/content/' + filename);
    file.pipe(fstream);
    file.pipe(fstream2);
    fstream.on('close', function(){
      fstream2.on('close', function(){
        res.status(200).json({'msg': 'success'});
      });
    });
  });
};
exports.uploadArticle = function(req, res){
  authenticateRequest(req, {success: function(){
    article.upload(req.body, function(err, data){
      if(!err){
        res.status(200).json({'msg': 'success'});
      }else{
        res.status(500).json({'err': err});
      }
    });
  }, error: function(){
    res.status(500).json({'err': 'invalid_pass'});
  }});
};
exports.uploadHeadline = function(req, res){
  authenticateRequest(req, {success: function(){
    headline.upload(req.body, function(err, data){
      if(!err){
        res.status(200).json({'msg': 'success'});
      }else{
        res.status(500).json({'err': err});
      }
    });
  }, error: function(){
    res.status(500).json({'err': 'invalid_pass'});
  }});
};

