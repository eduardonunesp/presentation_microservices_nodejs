var pattern = {
  generate:'id'
};

var action_result = function(err, result) {
  console.log(JSON.stringify(result))
};

require('seneca')()
  .client()
    .act(pattern, action_result)
    .act(pattern, action_result);