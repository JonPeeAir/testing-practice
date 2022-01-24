export default function analyzeArray(array) {
    return {
        average: computeAverage(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };
}

function computeAverage(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = sum / array.length;

    return avg;
}
