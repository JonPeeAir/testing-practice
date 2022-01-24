import analyzeArray from "../src/analyzeArray";

test("analyzeArray returns an object", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toBeInstanceOf(Object);
});

test("analyzeArray correctly computes the average of numbers [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});

test("analyzeArray correctly computes the average of numbers [1, 2, 3, 4, 5, 6]", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6])).toHaveProperty("average", 3.5);
});

test("analyzeArray correctly gets the min number of the array [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
});

test("analyzeArray correctly gets the min number of the array [2, 3, 4, 5, 6, 7]", () => {
    expect(analyzeArray([2, 3, 4, 5, 6, 7])).toHaveProperty("min", 2);
});

test("analyzeArray correctly gets the max number of the array [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
});

test("analyzeArray correctly gets the max number of the array [2, 3, 4, 5, 6, 7]", () => {
    expect(analyzeArray([2, 3, 4, 5, 6, 7])).toHaveProperty("max", 7);
});

test("analyzeArray correctly analyzes length of array [2, 3, 4]", () => {
    expect(analyzeArray([2, 3, 4])).toHaveProperty("length", 3);
});

test("analyzeArray correctly analyzes length of array [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
});
