import { Button } from '@mui/material';
import * as React from 'react';
import { CartState } from '../contexts/Context';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {

    const {state: { cart },} = CartState();

    const [total, setTotal] = React.useState();

    React.useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc+curr.price* curr.qty, 0))
    }, [cart])

    let displayTotal = (Math.round(total * 100)/100).toFixed(2)

    return(
        <div>
            {cart.map((prod) => (
                <ShoppingCartItem prod={prod} key={prod.id} />
            ))}
            <span style={{ fontWeight: 700, fontSize: 20, margin: "0 10px" }}>Total: $ {displayTotal}</span>
            <Button variant="contained" style={{width: "88%", margin: "0 10px" }}> Proceed to Checkout</Button>
        </div>
    )
    };
    
    export default ShoppingCart;