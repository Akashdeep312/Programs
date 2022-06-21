const sumOfFirstNNumbers = (sum, n) => {
    if (n < 1) {
        console.log(sum)
        return
    }

    sumOfFirstNNumbers(sum + n, n - 1);
}


const fact = n => {
    if (n == 1) return 1;
    return n * fact(n - 1);
}
/**
 * problems on functional recursion
 */


const reverseArray = (arr, start, end) => {
    if (start === end || start > end) {
        console.log(arr)
        return;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
}
let arr = [1, 2, 3, 4, 5, 6]



const reversArraySinglePointer = (i) => {

    if (i >= arr.length / 2) {
        console.log(arr);
        return;
    }
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
    reversArraySinglePointer(i + 1);
}

const checkPalindrome = (str, n, i) => {
    if (i >= n / 2) return true;

    if (str.charAt(i) !== str.charAt(n - i - 1)) {
        return false;
    }
    return checkPalindrome(str, n, i + 1);
}

const newString = "abcwba";



const fabonacci = (n) => {
    if (n <= 1) return n;
    return fabonacci(n - 1) + fabonacci(n - 2);
}


const triangularSum = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let j = 0;
    let newArr = [];
    for (let i = 1; i < nums.length - 1; i++) {
        newArr[j] = nums[i] + nums[j];
        j++;
    }
    return triangularSum(newArr);
};

const minMaxRecursive = (arr, idx, min, max) => {
    if (idx == arr.length) {

        return { max, min };
    }

    //find min and max
    if (arr[idx] > max) max = arr[idx];

    if (arr[idx] < min) min = arr[idx];

    return minMaxRecursive(arr, idx + 1, min, max);
}

console.log(minMaxRecursive([1, 4, 3, -5, -4, 8, 6], 0, 1, 1));