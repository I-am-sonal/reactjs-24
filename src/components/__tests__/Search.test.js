import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render Body component with Search button", async () => {

    await act(async () => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button", {name: "Search"});

    expect(searchBtn).toBeInTheDocument();
});

it("Should render Body component with Search button using testid", async () => {

    await act(async () => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByTestId("searchBtn");

    expect(searchBtn).toBeInTheDocument();
});

it("Should Search res List for Burger text input", async () => {

    await act(async () => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Burger"} });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurants ", async () => {

    await act(async () => 
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(9);

    const TopRatedRestaurantBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(TopRatedRestaurantBtn);

    const cardsAfterFilter = screen.getAllByTestId('resCard');

    expect(cardsAfterFilter.length).toBe(5);
});