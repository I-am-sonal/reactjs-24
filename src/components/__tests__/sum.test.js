import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () =>{

    const result = sum(3,4);

    //Assertion - its not mandatory to write expect, but our code will always get passed
    //even if you write empty test case it will get passed
    //we should have a expectation to check
    expect(result).toBe(7);
})