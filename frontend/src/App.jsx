import { useEffect } from "react";
import { useState } from "react";
import { getProducts, getCart } from "./api";

export default function App(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getCart().then(setCart);
  }, []);

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
            </div>
          ))}
      </div>
    </>
  );
}