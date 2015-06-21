var pattern = {
  generate:'id'
};

var action_result = function(err, result) {
  console.log(JSON.stringify(result))
};

require('seneca')()
  .use('redis-transport')
  .client({type:'redis'})
    .act(pattern, action_result);