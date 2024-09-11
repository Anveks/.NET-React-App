import { Fragment } from "react/jsx-runtime";
import { Product } from "../../app/models/product-model";
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

interface CatalogProps {
  products: Product[];
  addProduct: () => void; // this is a function signature; a function that receives no parameters and does not return nothing (void)
}

export default function Catalog({ products, addProduct }: CatalogProps) { // the default way is to pass the props as props: CatalogProps; but we can also use destructuring and tell the component directly that the first parameter is products and the second is the function;
  return (
    <>
      <List>
        {products.map((p: any) => (
          <ListItem key={p.id}>
            <ListItemAvatar>
              <Avatar src={p.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {p.name} : {p.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </ >
  )
};