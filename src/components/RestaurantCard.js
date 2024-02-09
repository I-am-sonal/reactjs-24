import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

    const {loggedInUser} = useContext(UserContext);

    const {resData} = props;
    //console.log(resData);

    const {cloudinaryImageId, name, areaName, cuisines, costForTwo, avgRating, sla} = resData?.info;

    return (
        <div data-testid="resCard" className="res-card w-52 mx-2  cursor-pointer mb-4 rounded-lg text-left">
            <div className="img-container overflow-hidden rounded-lg mb-2">
                <img className="res-log" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            </div>
            <div className="font-normal text-normal res-desc m-4">
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <h4>{areaName}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{"avgRatingString " +avgRating}</h4> 
                <h4>{sla?.slaString}</h4> 
                <h4>{loggedInUser}</h4> 
            </div>
        </div>
    )
};

// Higher order component
// Input -> RestaurantCard => gives => RestaurantCardPromoted


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => { 
        return (
            <div>
                {/* {console.log(props)} */}
                <label className="absolute bg-black text-white">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;