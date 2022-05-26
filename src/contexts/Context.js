import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext();
const Context = ( {children} ) => {

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
    
    ]

    const [state, dispatch] = useReducer(cartReducer,{
        products:products,
        cart:[]
    });

    return(
       <Cart.Provider value = {{state,dispatch}}>{children}</Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
};