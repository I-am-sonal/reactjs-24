import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";


it("should render Restaurant Card component", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument();
});

it("should render Restaurant Card component with Promoted label", () => {

    const Promoted = withPromotedLabel(RestaurantCard);
    render(
            <Promoted resData={MOCK_DATA}/>
    );

    const name = screen.getByText("Veg");

    expect(name).toBeInTheDocument();
});