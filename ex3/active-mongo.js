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
  product.name = 'apple'
  product.price = 100111

  product.save$(function(err, product) {
    if(err)
      return console.error(err);

    // product.id is a MongoDB id this time
    product.load$({id:product.id}, function(err, product) {
      if(err)
        return console.error(err);

      console.log('loaded: ' + product);
    });
  });
});
