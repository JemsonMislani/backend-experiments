const express = require('express');
const cors = require('cors');
const { products, cart } = require('./dummyData');

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000']
}));
app.use(express.json());

app.get('/', (req, res) => res.send('Backend Working!'));
app.get('/products', (req, res) => res.json(products));
app.get('/cart', (req, res) => res.json(cart));

app.post('/add-to-cart', (req, res) => {
  const { productId, quantity } = req.body;
  
  const product = products.find(p => p.id === productId);
  if(!product) {
    return res.status(404).json({error: 'No product'});
  }
  let item = cart.find(itm => itm.id === productId);

  if(item){
    item.quantity += quantity;
  } else {
    cart.push({
     id: productId,
     name: product.name,
     price: product.price,
     quantity: quantity
    });
  }
  console.log('cart:', cart);
  res.json({success: true, cart});
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
  console.log(`Test: http://localhost:${PORT}/products`);
});