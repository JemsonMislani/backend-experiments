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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
  console.log(`Test: http://localhost:${PORT}/products`);
});