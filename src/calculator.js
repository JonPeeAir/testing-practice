const Calculator = {
    add(addend1, addend2) {
        return addend1 + addend2;
    },

    subtract(minuend, subtrahend) {
        return minuend - subtrahend;
    },

    multiply(multiplicand, multiplier) {
        return multiplicand * multiplier;
    },

    divide(dividend, divisor) {
        if (divisor === 0) throw new Error("You can't divide by zero");
        return dividend / divisor;
    },
};

export default Calculator;
