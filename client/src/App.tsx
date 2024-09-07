import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then(data => { setProducts(data); console.log(products) })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <div className="app">
      <h1>Store App</h1>
      <ul>
        {products.map(p => (<li key={p.id}>{p.name} : {p.price}</li>))}
      </ul>
    </div>
  )
}

export default App;
