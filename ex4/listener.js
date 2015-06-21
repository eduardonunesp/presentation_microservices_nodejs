var pattern = {
  generate:'id'
};

var action = function(message, done) {
  done(null, {
    id:''+Math.random()
  });
}

require('seneca')()
  .use('redis-transport')
  .add(pattern, action)
    .listen({type:'redis'});