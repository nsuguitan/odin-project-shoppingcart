import Grid from '@mui/material/Grid';
import * as React from 'react';
import Product from '../components/Product'
import { CartState } from '../contexts/Context';

const ProductGrid = () => {

    const { state: {products}, } = CartState();
    console.log(products);

    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map(product => {
          return <Product product={product} key={product.id} />;
        })}
      </Grid>
    );
  };

const Shop = () => {
return(
    <div>
        <h1>This is the Shop</h1>
        <ProductGrid />
    </div>
)
};

export default Shop;
