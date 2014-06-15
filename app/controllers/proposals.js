var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport('SMTP',{
    service: 'Gmail',
    auth: {
      user: process.env['SEED_USER'],
      pass: process.env['SEED_PASS']
    }
  });

exports.processProposal = function(req, res){
  smtpTransport.sendMail({
     from: 'The Seed', // sender address
     to: '<theseedok@gmail.com>', // comma separated list of receivers
     subject: 'Headline Proposal', // Subject line
     text: req.body.headline // plaintext body
  }, function(err, response){
    if(err){
      console.log('Error sending email: ', err);
      res.status(500).json({'error': err});
    } else{
      res.json({'msg': 'success'});
    }
  });
};

