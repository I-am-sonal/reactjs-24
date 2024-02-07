import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {

    //const [showItems, setShowItems] = useState(false);

    const handleClick = () => {

        setShowIndex();
    }
    return (
        <div className="restaurant-category-box content-center text-left">
            <div className="accordion-title w-[100%] justify-between flex acc-active" onClick={handleClick}>
                <span className="bg-gray-500 w-[100%] mb-2">{data.title}
                ({data.itemCards.length})
                </span><span>↓</span>
            </div>
            <div className="accordion-body w-[100%]">
                {/* Accordion body */}
                {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;