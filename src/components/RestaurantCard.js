import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log(props);

    const {cloudinaryImageId, name, areaName, cuisines, costForTwo, avgRating, sla} = resData?.info;

    return (
        <div className="res-card w-52 mx-2" style={{
            backgroundColor: "#f0f0f0"
        }}>
            <div className="img-container">
                <img className="res-log" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            </div>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{"avgRatingString " +avgRating}</h4> 
            <h4>{sla?.slaString}</h4>                       
        </div>
    )
}

export default RestaurantCard;