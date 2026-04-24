import { useEffect } from "react";
import { useState } from "react";
import { getProducts, getCart, addToCart } from "./api";

export default function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getCart().then(setCart);
  }, []);

  const addCart = async (productId) => {
    const result = await addToCart(productId, 1);
    setCart(result.cart);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return(
    <>
      <div>
        <h1>Shopping Cart!</h1>
          <h2>Products</h2>
          {products.map((prod) => (
            <div key={prod.id}>
              <img src={prod.prodimg} alt='' />
              <h3>{prod.name}</h3>
              <p>{prod.size}</p>
              <p>₱{prod.price.toFixed(2)}</p>
              <button
                onClick={() => addCart(prod.id)}>Add to cart</button>
            </div>
          ))}
      </div>
      <div>
        <h2>Your cart({totalItems})</h2>
        {cart.length === 0 ? <p>Empty cart</p> : (cart.map((item, ind) => (
          <div key={ind}>
            <p>{item.productId}</p>
            <p>{item.name}</p>
            <p>quantity: {item.quantity}</p>
            <p>Total: {item.price.toFixed(2) * item.quantity}</p>
            </div>
        )))}
      </div>
    </>
  );
}