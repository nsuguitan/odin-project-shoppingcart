import Grid from '@mui/material/Grid';
import * as React from 'react';
import Product from '../components/Product'

const products = [
    {
        id: 1,
        name: "Double Chocolate",
        price: "$2.95",
        imageURL: "./images/double-chocolate.jpg"
    }
    ,{
        id: 2,
        name: "Peanut Butter",
        price: "$2.95",
        imageURL: "./images/peanut-butter.jpg"
    }
    ,{
        id: 3,
        name: "White Chocolate",
        price: "$2.95",
        imageURL: "./images/white-chocolate.jpg"
    }
    ,{
        id: 4,
        name: "Snickerdoodle",
        price: "$2.95",
        imageURL: "./images/snickerdoodle.jpg"
    }
    ,{
        id: 5,
        name: "Mint",
        price: "$2.95",
        imageURL: "./images/mint.jpg"
    }
    ,{
        id: 6,
        name: "M&M chocolate chip",
        price: "$2.95",
        imageURL: "./images/mm-choco-chip.jpg"
    }
    ,{
        id: 7,
        name: "Macaroon",
        price: "$2.95",
        imageURL: "./images/macaroon.jpg"
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
