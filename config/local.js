var fs = require('fs');

module.exports = {
  ssl : {
    key: fs.readFileSync('config/ssl/key.pem'),
    cert: fs.readFileSync('config/ssl/cert.pem'),
  },
};
