var seneca = require('seneca')();

var product = seneca.make('product')
product.name = 'apple'
product.price = 100

product.save$(function(err, product) {
  if(err)
    return console.error(err);

  console.log('saved: ' + product);

  // product.id was generated for you
  product.load$({id:product.id}, function(err, product) {
    if(err)
        return console.error(err);

    console.log('loaded: ' + product);
  });
})