const Cart = require('./src/cart');
const cart = new Cart();

cart.addItem('Celular', 1, 1500);
cart.addItem('Capinha', 2, 30);

console.log(cart.getItems());
console.log('Total:', cart.getTotal());
