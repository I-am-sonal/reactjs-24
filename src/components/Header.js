import { constants } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => { 

    const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser);

    const [btnNameReact, useBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // console.log("Header renders");

    useEffect(()=> {
        //console.log("useEffect renders");

    },[btnNameReact]);

    //subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);
    return (
        <div className="header flex justify-between">
            <div className="logo-container">
                <img className="w-52" src={IMAGE_URL} />
            </div>
            <div className="nav-items items-center flex">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    <button className="LoginBtn" onClick={() => {
                        btnNameReact === "Login" ? useBtnNameReact("Logout") : useBtnNameReact("Login")
                    }}>   
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;