var seneca = require('seneca')()

seneca.add( {role:'math', cmd:'sum'}, function(args,callback) {
  var sum = args.left + args.right
  callback(null,{answer:sum})
})

seneca.act( {role:'math', cmd:'sum', left:10, right:277}, function(err,result) {
  if( err ) return console.error( err )
  console.log(result)
})