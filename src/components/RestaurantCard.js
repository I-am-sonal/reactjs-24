import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

    const {loggedInUser} = useContext(UserContext);

    const {resData} = props;
    // console.log(props);

    const {cloudinaryImageId, name, areaName, cuisines, costForTwo, avgRating, sla} = resData?.info;

    return (
        <div className="res-card w-52 mx-2 bg-gray-100 hover:bg-green-300">
            <div className="img-container">
                <img className="res-log" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            </div>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{"avgRatingString " +avgRating}</h4> 
            <h4>{sla?.slaString}</h4> 
            <h4>{loggedInUser}</h4> 
        </div>
    )
};

// Higher order component
// Input -> RestaurantCard => gives => RestaurantCardPromoted


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => { 
        return (
            <div>
                <label className="absolute bg-black text-white">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;