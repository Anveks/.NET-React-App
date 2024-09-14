import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/models/product-model"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
        avatar={
          <Avatar>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}  // Correct usage of the `title` prop
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'primary.main' }
        }}
      />

      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', maxHeight: '20rem' }}
        // image={product.pictureUrl} TODO: check why the URL is not valid
        image={`http://picsum.photos/${200 + product.id}`}
        title={product.name}
      />

      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {/* {product.description} */}
          {product.brand} / {product.type}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>

    </Card>
  )
};