var path = require('path'),
    fs = require('fs'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

process.env.SEED_USER = 'theseedok@gmail.com';
process.env.SEED_PASS = 'Lolcat57';
process.env.SEED_UPLOAD_PASS_HASH = '$2a$10$vMZfPz4snkwusK6wQ9c21eYHCrIxrCxO7Yf/EW.f1eztm5MeHLC.O';

// Configuration for different environments
var config = {
  development: {
    root: rootPath,
    app: {
      name: 'TheSeed'
    },
    port: 3000,
    db: 'mongodb://localhost/TheSeed-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'TheSeed'
    },
    port: 3000,
    db: 'mongodb://localhost/TheSeed-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'TheSeed'
    },
    port: 3000,
    cred: {
        // Put the actual certificate path on your server. 
        /* 
        key: fs.readFileSync('/ssl/server/keys/server1.key'),
        cert: fs.readFileSync('/ssl/server/certificates/server1.crt'),
        ca: fs.readFileSync('/ssl/ca/ca.crt')
        */
    },
    db: 'mongodb://localhost/TheSeed-production'
  }
};

module.exports = config[env];

