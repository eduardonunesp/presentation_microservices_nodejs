var pattern = {
  generate:'id'
};

var action = function(message, done) {
  done(null, {
    id:''+Math.random()
  });
}

require('seneca')()
  .add(pattern, action)
    .listen();