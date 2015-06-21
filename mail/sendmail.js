
var seneca = require('seneca')();

var send_email = function(options) {
  seneca.log.info('Send email', options);
};

seneca
  .add({send:'message', type:'email'}, function(message, done) {
    if (!message.to)
      return done(new Error('Dest not found'));

    send_email(message);
    done(null, {return: true, type:message.type});
  })
  .listen();