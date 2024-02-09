import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    
    const dummy = "dummy data";

    const [showIndex, setShowIndex] = useState(null);

    const {resId} = useParams();
    //console.log(resId);

    const resInfo = useRestaurantMenu(resId); 

    if (resInfo === null)  {
        return <Shimmer />;
    }

    const { name, city, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   // console.log(itemCards);

    const itemCategories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(itemCategories);

   

    return (
        <div className="menu text-center w-full max-w-[800px] inline-block">
            <h1 className="my-1 text-2xl font-bold">{name}</h1>
            <h2 className="font-bold">{city}</h2>
            <h4 className="font-bold">{costForTwoMessage}</h4>
            <h4 className="font-bold">{cuisines.join(",")}</h4>
            <div className="category-accordion bg-gray-100">
                {itemCategories.map((category, index) =>(
                    // controlled component
                <RestaurantCategory 
                key={category.card?.card.title} 
                data={category.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}
                />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;