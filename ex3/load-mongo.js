var seneca = require('seneca')();

seneca.use('mongo-store', {
  name:'seneca',
  host:'127.0.0.1',
  port:27017
});

seneca.ready(function(err) {
  if(err)
    return console.error(err);

  var product = seneca.make('product')
  product.load$({id:"5584c48f3d4379ed239c5475"}, function(err, product) {
    if(err)
      return console.error(err);

    console.log('loaded: ' + product);
  });
});
