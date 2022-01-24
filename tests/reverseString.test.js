import reverseString from "../src/reverseString";

test("function successfully reverses a one word string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("function keeps letter casing", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("function successfull reverses a multi-worded string", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});
