import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resList from "../utils/mockData";

const Body = () => {

	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	const [searchText, setSearchText] = useState("");

	// console.log("body renders");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.969539&lng=72.819329&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const json = await data.json();
		// console.log(json);
		// console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
		setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	}	

	// let listOfRestaurants = [];

	//Normal JS variable
// let ListOfRestaurants = [
// 	{
// 	"info": {
// 		"id": "239077",
// 		"name": "McDonald's",
// 		"cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
// 		"locality": "Kohinoor corne",
// 		"areaName": "Prabhadevi",
// 		"cost": "₹400",
// 			"cuisines": [
// 		  "Burgers",
// 		  "Beverages",
// 		  "Cafe",
// 		  "Desserts"
// 		],
// 		"avgRatingString": "4",
// 		  "deliveryTime": 24,
// 		  "slaString": "24 mins",
// 	  },
//     },
// 	{
// 		"info": {
// 			"id": "239078",
// 			"name": "KFC",
// 			"cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
// 			"locality": "Kohinoor corne",
// 			"areaName": "Worli",
// 			"cost": "₹1000",
// 				"cuisines": [
// 			  "Burgers",
// 			  "Beverages",
// 			  "Cafe",
// 			  "Desserts"
// 			],
// 			"avgRatingString": "5.5",
// 			  "deliveryTime": 20,
// 			  "slaString": "20 mins",
// 		  },
// 	},
// 	{
// 		"info": {
// 			"id": "239079",
// 			"name": "McD",
// 			"cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
// 			"locality": "Kohinoor corne",
// 			"areaName": "Worli",
// 			"cost": "₹1000",
// 				"cuisines": [
// 			  "Burgers",
// 			  "Beverages",
// 			  "Cafe",
// 			  "Desserts"
// 			],
// 			"avgRatingString": "4.1",
// 			  "deliveryTime": 20,
// 			  "slaString": "20 mins",
// 		  },
// 		}		
// ];

	// conditional rendering
	// if (ListOfRestaurants.length ===0){
	// 	return <Shimmer />;
	// }
	
	const onlineStatus = useOnlineStatus();

	if(onlineStatus === false) return <h1>Your Offline..Please check your network connection...!!!!</h1>;

	return listOfRestaurants.length ===0 ? <Shimmer /> : (
		<div className="body"> 
			<div className="filter p-4 m-4 flex">
				<div className="search">
					<input type="text" className="search-box border border-solid border-black" value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}/>
					<button className="searchBtn px-4 py-2 bg-green-100 m-4" onClick={() => {
						const FilteredRestaurant = listOfRestaurants.filter((res) => 
						res.info.name.toLowerCase().includes(searchText.toLowerCase()));
						setFilteredRestaurant(FilteredRestaurant);
					}}>Search</button>
				</div>
				<button className="filter-btn px-4 py-2 bg-green-100 m-4" onClick={()=> {
					const FilteredList = listOfRestaurants.filter(res => res.avgRating > 4)
					console.log(listOfRestaurants);
					setListOfRestaurants(FilteredList);
				}}>Top Rated Restaurants</button>
			</div>
			<div className="res-container flex flex-wrap">
				{
					filteredRestaurant.map((restaurant) => (
						<Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}>
							<RestaurantCard resData={restaurant} />
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default Body;