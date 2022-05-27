import { CartState } from "../contexts/Context";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "@mui/material";

const ShoppingCartItem = ({prod}) => {
 const {state : { cart }, dispatch} = CartState();

 const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  const formattedCurrency = currencyFormat.format(prod.price);

 return(
     <div>
         <span className="cartItem" key={prod.id}>
            <img 
            src={prod.imageURL} 
            className="cartItemImg"
            alt={prod.name}
            />
            <div className="cartItemDetail">
                <span>{prod.name}</span>
                <span>{formattedCurrency}</span>
            </div>
            <input className="productQty" type="number" min="1" defaultValue={prod.qty} ></input>
            < AiFillDelete 
                className="trashIcon"
                fontSize="20px"
                style={{cursor: "pointer"}}
                onClick={() =>
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                    })
                }
            />
         </span>
     </div>
 )
};

export default ShoppingCartItem;