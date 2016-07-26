

var ShoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];


ShoppingList.push('fruit loops');

ShoppingList[4] = 'fair trade coffee'

ShoppingList.splice(2, 3, 'rice', 'beans');

var cart = [];

cart.push(ShoppingList.pop());

cart.push(ShoppingList.shift());


while (ShoppingList.length > 0) {
  cart.push(ShoppingList.pop());
}

cart.sort().reverse();

var x;

x = cart.join();

console.log(x);
