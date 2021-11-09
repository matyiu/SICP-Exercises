function fib(n) {
    return fib_iter(1, 0, 0, 1, n);
}

function fib_iter(a, b, p, q, count) {
    const calcA = () => b * q + a * q + a * p;
    const calcB = () => b * p + a * q;

    const calcP = () => (q * q) + (p * p);
    const calcQ = () => (2 * p * q) + (q * q);
    
    if (count === 0) {
        return b;
    } else if (count % 2 === 0) {
        return fib_iter(a, b, calcP(), calcQ(), count / 2);
    } else {
        return fib_iter(calcA(), calcB(), p, q, count - 1);
    }
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13