import Calculator from "../src/calculator";

// Add function tests
test("Add function can do simple addition", () => {
    expect(Calculator.add(1, 2)).toBe(3);
});

test("Add function can add a negative and positive number", () => {
    expect(Calculator.add(1, -2)).toBe(-1);
});

test("Add function can add negative numbers", () => {
    expect(Calculator.add(-2, -2)).toBe(-4);
});

test("Add function can add floats", () => {
    expect(Calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// Subtract function tests
test("Subtract function can do simple subtraction", () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
});

test("Subtract function can subtract two numbers where subtrahend is larger that minuend", () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
});

test("Subtract function can subtract a negative minuend and positive subtrahend", () => {
    expect(Calculator.subtract(-2, 2)).toBe(-4);
});

test("Subtract function can subtract a positive minuend and negative subtrahend", () => {
    expect(Calculator.subtract(2, -2)).toBe(4);
});

test("Subtract function can subtract two negative numbers", () => {
    expect(Calculator.subtract(-2, -3)).toBe(1);
});

test("Subtract function can subtract two floats", () => {
    expect(Calculator.subtract(0.25, 0.2)).toBeCloseTo(0.05);
});

// Multiply function tests
test("Multiply function can do simple multiplication", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
});

test("Multiply function results to zero when multiplying by zero", () => {
    expect(Calculator.multiply(12412345098, 0)).toBe(0);
});

test("Multiply function results to other number when multiplying by one", () => {
    expect(Calculator.multiply(12345, 1)).toBe(12345);
});

test("Multiply function can multiply a negative a positive number", () => {
    expect(Calculator.multiply(2, -3)).toBe(-6);
});

test("Multiply function can multiply negative numbers", () => {
    expect(Calculator.multiply(-2, -3)).toBe(6);
});

test("Multiply function can multiply an int and float", () => {
    expect(Calculator.multiply(2, 0.5)).toBe(1);
});

test("Multiply function can multiply floats", () => {
    expect(Calculator.multiply(0.5, 0.25)).toBe(0.125);
});

// Divide function tests
test("Divide function can do simple division", () => {
    expect(Calculator.divide(6, 3)).toBe(2);
});

test("Divide function can divide two numbers where divisor is larger than dividend", () => {
    expect(Calculator.divide(3, 6)).toBe(0.5);
});

test("Divide function can divide a negative and positive number", () => {
    expect(Calculator.divide(3, -6)).toBe(-0.5);
});

test("Divide function can divide two negative numbers", () => {
    expect(Calculator.divide(-3, -6)).toBe(0.5);
});

test("Divide function can divide an int by a float", () => {
    expect(Calculator.divide(5, 0.25)).toBe(20);
});

test("Divide function can divide a float by an int", () => {
    expect(Calculator.divide(0.25, 5)).toBe(0.05);
});

test("Divide function can divide two floats", () => {
    expect(Calculator.divide(0.25, 0.8)).toBe(0.3125);
});

test("Divide function returns zero when zero is the dividend", () => {
    expect(Calculator.divide(0, 6)).toBe(0);
});

test("Divide function throws an error when dividing by zero", () => {
    expect(() => Calculator.divide(6, 0)).toThrow(Error);
});
