import Grid from '@mui/material/Grid';
import * as React from 'react';
import Product from '../components/Product'

const products = [
    {
        id: 1,
        name: "Double Chocolate",
        price: "$2.95",
        imageURL: "./images/double-chocolate"
    }
    ,{
        id: 2,
        name: "Peanut Butter Chocolate Chip",
        price: "$2.95",
        imageURL: "./images/pb-choco-chip"
    }
    ,{
        id: 3,
        name: "White Macadamia and Cranberries",
        price: "$2.95",
        imageURL: "./images/white-macadamia-cranberry"
    }
    ,{
        id: 4,
        name: "Snickerdoodle",
        price: "$2.95",
        imageURL: "./images/snickerdoodle"
    }
    ,{
        id: 5,
        name: "Mint Chocolate Chip",
        price: "$2.95",
        imageURL: "./images/mint-choco-chip"
    }
    ,{
        id: 6,
        name: "M&M chocolate chip",
        price: "$2.95",
        imageURL: "./images/mm-choco-chip"
    }

];

const ProductGrid = () => {
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
