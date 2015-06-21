var seneca = require('seneca')();

seneca
  .client()
  .act({
    send:'message',
    'type':'email',
    to:'eduardonunesp@gmail.com'}, function(err, response) {
      if (err)
        return console.log('Error: ', err);
      console.log('Ok', response);
    });