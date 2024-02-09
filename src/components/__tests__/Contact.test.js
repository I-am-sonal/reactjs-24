import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {

  // beforeAll(() => {

  //   //it will run before all test cases. clean up of code can be done here.
  //   //These are helper functions
  //   console.log("Before All");
  // })

  // beforeEach(() => {

  //   //it will run before each test case.
  //   console.log("Before Each");
  // })
  // afterAll(() => {

  //   //it will run before all test cases. clean up of code can be done here.
  //   console.log("After All");
  // })

  // afterEach(() => {

  //   //it will run before each test case.
  //   console.log("After Each");
  // })

  it('should load contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  
  it('should load submit word inside Contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  })
  
  it('should load placeholder name inside Contact us component', () => {
    render(<Contact />); //it will render on the jsdom
  
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });
  
  it('should load 2 input boxes on the Contact us component', () => {
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

