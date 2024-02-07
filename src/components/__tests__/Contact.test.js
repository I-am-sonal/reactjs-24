import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contatc Us Page Test Case", () => {
  test('should load contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  
  test('should load submit word inside Contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  })
  
  test('should load placeholder name inside Contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });
  
  test('should load 2 input boxes on the Contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    //querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    // console.log(inputBoxes[0]); // it will return a piece of JSX
    //console.log(inputBoxes.length);
    //expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});

