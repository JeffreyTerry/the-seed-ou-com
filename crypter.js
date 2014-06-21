var bcrypt = require('bcrypt');

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash('', salt, function(err, hash) {
    console.log('hash', hash);
    bcrypt.compare('', hash, function(err, res){
      console.log(err, res);
    });
  });
});
