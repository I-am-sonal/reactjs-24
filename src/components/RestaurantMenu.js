import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId); 

    if (resInfo === null)  {
        return <Shimmer />;
    }

    const { name, city, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{city}</h2>
            <h4>{costForTwoMessage}</h4>
            <h4>{cuisines.join(",")}</h4>
            <div className="menulist">
                <ul>
                    {itemCards.map(item => 
                    (<li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs "}
                        {item.card.info.finalPrice/ 100 || item.card.info.price/ 100} 
                    </li>)
                    )}
                </ul>
               {/* <li>{itemCards[0].card.info.name}</li>
               <li>{itemCards[1].card.info.name}</li>

               <li>{itemCards[2].card.info.name}</li> */}

            </div>
        </div>
    );
};

export default RestaurantMenu;