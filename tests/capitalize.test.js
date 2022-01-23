import capitalized from "../src/capitalize";

test("First character is capitalized when given a string", () => {
    expect(capitalized("hello world")).toBe("Hello world");
});
