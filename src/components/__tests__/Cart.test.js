import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import MOCK_CATEGORY_DATA from "../mocks/resCategoryMock.json";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => { //jest.fn() is a mock function, it gives callback function
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_CATEGORY_DATA);
        }
    })
});

it("Should load Restaurant Menu component", async () =>{
    await act(async() =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ));
    
    //test case 1
    const accTitle = screen.getByText("Recommended(20)");
    fireEvent.click(accTitle);
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
    
     //test case 2
    const addBtns = screen.getAllByText("Add +");
    expect(addBtns.length).toBe(20);
    
     //test case 3 - Header cart items
    const cartItemHeaderBeforeClick = screen.getByText("Cart - (0 items)");
    expect(cartItemHeaderBeforeClick).toBeInTheDocument();
    
     //test case 4
    fireEvent.click(addBtns[0]);
    const cartItemHeaderAfterClick = screen.getByText("Cart - (1 items)");
    expect(cartItemHeaderAfterClick).toBeInTheDocument();
    
     //test case 5
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

     //test case 6 - Cart page
    const cart = screen.getAllByTestId("foodItems");
    //expect(cart.length).toBe(2);// it will fail because we already have length of 20 from RestaurantMenu above
    expect(cart.length).toBe(22);

     //test case 6 - clear Cart button
     
    const clearCartBtn = screen.getByRole("button",{name: "Clear Cart"});
    fireEvent.click(clearCartBtn);

     //test case 7 - clear Cart length and message 
    const cart2 = screen.getAllByTestId("foodItems");
    expect(cart2.length).toBe(20);
    expect(screen.getByText(/Your cart is empty./)).toBeInTheDocument();

})