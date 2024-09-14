import { Button } from "@mui/material";
import { Product } from "../../app/models/product-model";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

// interface CatalogProps {
//   products: Product[];
//   addProduct: () => void; // this is a function signature; a function that receives no parameters and does not return nothing (void)
// }

// export default function Catalog({ products, addProduct }: CatalogProps) { // the default way is to pass the props as props: CatalogProps; but we can also use destructuring and tell the component directly that the first parameter is products and the second is the function;

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: "product" + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: "some brand",
      description: 'some description',
      pictureUrl: `http://picsum.photos/${200 + (prevState.length + 1)}`,
      type: "default type",
      quantityInStock: 10
    }]);
  }

  return (
    <>
      <ProductList products={products}></ProductList>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </ >
  )
};