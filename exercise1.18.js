function double(x) {
    return x + x;
}

function halve(x) {
    return x / 2;
}

// \theta(log n)
// Recursive process
//
// function times(a, b) {
//     if (a === 0 || b === 0) return 0;
//     else if (b === 1) return a;
//     else if (b % 2 === 0) return times(double(a), halve(b));
//     else return a + times(a, b - 1);
// }

// \theta(log n)
// Iterative process
function times(a, b) {
    const timesIter = (a, b, counter) => {
        if (counter === 0 || b === 0) {
            return a;
        } else if (counter % 2 === 0) {
            return timesIter(a, double(b), halve(counter));
        } else {
            return timesIter(a + b, b, counter - 1);
        }
    }
    return timesIter(0, a, b)
}

console.log(times(3, 0));
console.log(times(3, 1));
console.log(times(3, 2));
console.log(times(3, 3));
console.log(times(3, 4));
console.log(times(3, 5));
console.log(times(3, 6));
console.log(times(3, 7));