import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const Product = props => {
    return(
        <Grid item xs={3}>
            <Paper>
                <p>
                    <strong>{props.product.name}</strong>
                </p>
                <p>{props.product.price}</p>
            </Paper>
        </Grid>
        
    );
}

  export default Product;