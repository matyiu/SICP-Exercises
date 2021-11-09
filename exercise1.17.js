// \theta(n)
// function times(a,b) {
//     return b === 0
//            ? 0
//            : a + times(a, b - 1);
// }

function double(x) {
    return x + x;
}

function halve(x) {
    return x / 2;
}

// \theta(log n)
function times(a, b) {
    if (a === 0 || b === 0) return 0;
    else if (b === 1) return a;
    else if (b % 2 === 0) return times(double(a), halve(b));
    else return a + times(a, b - 1);
}

console.log(times(3, 0));
console.log(times(3, 1));
console.log(times(3, 2));
console.log(times(3, 3));
console.log(times(3, 4));
console.log(times(3, 5));
console.log(times(3, 6));
console.log(times(3, 7));