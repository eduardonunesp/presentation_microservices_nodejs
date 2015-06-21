var uuid = require('node-uuid');

require('seneca')()

  .add({generate:'id'}, function(message, done) {
    done(null, {id:''+Math.random()});
  })

  .add({generate:'id', type:'uuid'}, function(message, done) {
    done(null, {id:uuid.v4()});
  })

  .add({math:'sum'}, function(message, done) {
    done(null, message.left + message.right);
  })

  .listen();