import { Grid } from "@mui/material";
import { Product } from "../../app/models/product-model";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <Grid container spacing={4}>
      {products.map((p: any) => (
        <Grid item xs={3}>
          <ProductCard key={p.id} product={p}></ProductCard>
        </Grid>
      ))}
    </Grid>
  )
}