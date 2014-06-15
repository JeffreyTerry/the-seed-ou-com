var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport('SMTP',{
    service: 'Gmail',
    auth: {
      user: process.env['SEED_USER'],
      pass: process.env['SEED_PASS']
    }
  });

exports.processApplication = function(req, res){
  smtpTransport.sendMail({
     from: 'The Seed', // sender address
     to: '<theseedok@gmail.com>', // comma separated list of receivers
     subject: 'Application', // Subject line
     html: '<strong style="text-decoration: underline;">Name</strong><br><br>' + req.body.name + '<br><br><strong style="text-decoration: underline;">Email</strong><br><br>' + req.body.email + '<br><br><strong style="text-decoration: underline;">Sample Headlines</strong><br><br>' + req.body.sampleHeadlines + '<br><br><strong style="text-decoration: underline;">Sample Article</strong><br><br>' + req.body.sampleArticle // html body
  }, function(err, response){
    if(err){
      console.log('Error sending email: ', err);
      res.status(500).json({'error': err});
    } else{
      res.json({'msg': 'success'});
    }
  });
};

