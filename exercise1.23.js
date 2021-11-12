function square(x) {
    return x * x;
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, next(test_divisor));
}
function divides(a, b) {
    return b % a === 0;
}
function next(n) {
    return n === 2
           ? 3
           : n + 2;
}