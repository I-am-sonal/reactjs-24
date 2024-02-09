
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it('should render Header component with a login button', () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    //const loginButton = screen.getByRole("button"); // its a good way than "getByText"
    const loginButton = screen.getByText("Login", {name: "Login"}); // if there are multiple buttons, we want specific button whos name is "Login"

    expect(loginButton).toBeInTheDocument();
});

it('should render Cart in Header component', () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    const cartItems = screen.getByText("Cart - (0 items)"); 

    expect(cartItems).toBeInTheDocument();
});

it('should render Cart word in Header component', () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    const cart = screen.getByText(/Cart/); 

    expect(cart).toBeInTheDocument();
});

it('should change Login button to Logout on click', () => {
    
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    
    const loginButton = screen.getByText("Login", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("Logout", {name: "Logout"});


    expect(logoutButton).toBeInTheDocument();
    
});