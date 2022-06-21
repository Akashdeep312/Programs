/**
 * prints my name Aakash n times
 * @param {*} n int
 * @returns 
 */
const printNameNTimes = (n) => {
    if (n < 1) return;
    console.log("Aaksh");
    printNameNTimes(n - 1)
}

/**
 * prints 1 to N digits
 * @param {*} count int
 * @param {*} n int
 * @returns 
 */
const print1ToN = (count, n) => {
    if (count > n) return;
    console.log(count);
    print1ToN(count + 1, n);
}

/**
 * prints n to 1
 * @param {*} n 
 * @returns 
 */
const printNto1 = (n) => {
    if (n < 1) return;
    console.log(n);
    printNto1(n - 1);
}

/**
 * prints 1 to n with backtracking
 * @param {*} n 
 * @returns 
 */
const print1ToNBacktrack = (n) => {
    if (n < 1) return;
    print1ToNBacktrack(n - 1);
    console.log(n);
}



const printNto1Backtrack = (count, n) => {
    if (count > n) return;
    printNto1Backtrack(count + 1, n);
    console.log(count);
}

printNto1Backtrack(1, 5)