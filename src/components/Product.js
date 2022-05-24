import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import * as React from 'react';

const Product = props => {
    return(
        <Grid item xs={3}>
            <Paper>
                <div className='cookie-card'>
                    <div className='cookie-shop-image-container'>
                        <img src={props.product.imageURL} alt="NONE" className='cookie-shop-image'></img>
                    </div>
                    <p className='card-text'>
                        <strong>{props.product.name}</strong>
                    </p>
                    <p className='card-text'>{props.product.price}</p>
                    <Button variant="contained">Add to Cart</Button>
                </div>
            </Paper>
        </Grid>
        
    );
}

  export default Product;