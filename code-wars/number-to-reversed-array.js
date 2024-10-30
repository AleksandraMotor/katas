// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Method 1

function digitize(n) {
    const digits = Array.from(String(n), Number);
    return digits.reverse();
}

// Method 2

function digitize(n) {
    const digits = [...String(n)].map(Number);
    return digits.reverse();
}