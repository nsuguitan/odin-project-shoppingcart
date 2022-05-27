import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import * as React from 'react';
import { CartState } from '../contexts/Context';

const Product = ({product}) => {

    const { 
        state:{ cart },
        dispatch,
    } = CartState();
    console.log(cart);

    const currencyFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });

      const formattedCurrency = currencyFormat.format(product.price);

    return(
        <Grid item xs={3}>
            <Paper>
                <div className='cookie-card'>
                    <div className='cookie-shop-image-container'>
                        <img src={product.imageURL} alt="NONE" className='cookie-shop-image'></img>
                    </div>
                    <p className='card-text'>
                        <strong>{product.name}</strong>
                    </p>
                    <p className='card-text'>{formattedCurrency}</p>
                    {cart.some(p=>p.id===product.id) ? (
                        <Button onClick={() => {
                            dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: product
                            })
                        }} variant="contained" color="error">Remove from Cart</Button>
                    ):(
                        <Button onClick={() => {
                            dispatch({
                                type:'ADD_TO_CART',
                                payload: product
                            })
                        }} variant="contained">Add to Cart</Button>
                    )}
                    
                    
                </div>
            </Paper>
        </Grid>
        
    );
}

  export default Product;