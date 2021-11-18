import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

// const itemsOrigin = [
//   { id: 1, title: "Item 1", qty: 0, like: false },
//   { id: 2, title: "Item 2", qty: 0, like: false },
//   { id: 3, title: "Item 3", qty: 1, like: true },
//   { id: 4, title: "Item 4", qty: 0, like: false },
// ];

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "Item 1", qty: 0, like: false },
    { id: 2, title: "Item 2", qty: 5, like: false },
    { id: 3, title: "Item 3", qty: 1, like: true },
    { id: 4, title: "Item 4", qty: 0, like: false },
  ]);

  console.log(products[3].like = true)
  const onLikeClick = (id) => {
    
    const newProducts = products.map((product) => {
      if (product.id !== id) return product;
      else return { ...product, like: !product.like };
    });
    setProducts(newProducts);
  };

  return (
    <div className="App">
      <div>
        {products.map(({ id, title, qty, like }) => {
          return (
            <Card
              key={id}
              id={id}
              title={title}
              qty={qty}
              like={like}
              onLikeClick={() => onLikeClick(id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
