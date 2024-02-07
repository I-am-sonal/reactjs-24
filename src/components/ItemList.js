import { useDispatch } from "react-redux";
import { addItem } from '../utils/cartSlice';
import { CDN_URL } from "../utils/constants";

const ItemList = ({items, dummy}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action

        dispatch(addItem(item));
    }
    //console.log(dummy);
    return (
        <div className="item-lists border-b-2 border-black">
            {items.map((item) => (
                <div key={item.card.info.id} className="flex border-b-2 mb-2 justify-between"> 
                    <div className="left-box">
                        <div className="name"> "Name: " {item.card.info.name}</div>
                        <div className="description"> "description: " {item.card.info.description}</div>
                        <div className="price"> "price: " {item.card.info.price}</div>
                    </div>
                    <div className="right-box w-32 relative">
                        <img src={CDN_URL+item.card.info.imageId}/>
                        <div className="add-item absolute bottom-0 left-7">
                            <span className="bg-white shadow-lg left-14 rounded-lg" onClick={() => handleAddItem(item)}>Add +</span>
                        </div>                       
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default ItemList;