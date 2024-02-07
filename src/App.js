import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
// import Grocery from "./components/Grocery";




const Grocery = lazy(() =>import("./components/Grocery"));
const About = lazy(() =>import("./components/About"));

const AppLayout = () => {

    
    const [userName, setUserName] = useState();

    useEffect(() => {
        //make API call and send username and password
        const data = {
            name: "Sonal B",
        };

        setUserName(data.name);

    },[]);


    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app text-center inline-block w-[100%]">
                <UserContext.Provider value={{loggedInUser: "HeaderSonal"}}>
                <Header />
                </UserContext.Provider>

                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading About...</h1>}>
                        <About />
                    </Suspense>
                    ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                <Suspense fallback={<h1>Loading Grocery...</h1>}>
                    <Grocery />
                </Suspense>
                ),
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(JsxHeading);
root.render(<RouterProvider router={appRouter} />);