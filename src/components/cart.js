import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    const dispatch = useDispatch(); 

    const handleClearCart = () => {
        //console.log("hi")
        dispatch(clearCart());
    }; 

    return (
        <div className="text-center inline-block w-[100%] max-w-[800px]">
            <h1 className="font-bold">Cart</h1>
            <button onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1>Your cart is empty. Please add items to the cart.</h1>}
            <ItemList items={cartItems}/>
        </div>
    )
}

export default Cart;