const search = function (nums, target) {
    return bsHelper(nums, target, 0, nums.length - 1);
};

/**
 * Binary search helper
 * @param {*} nums input array in acending order
 * @param {*} target target element
 * @param {*} start start index
 * @param {*} end end index
 * @returns 
 */
const bsHelper = (nums, target, start, end) => {

    if (start > end) {
        return -1;
    }

    let mid = Number.parseInt((start + end) / 2);
    if (nums[mid] == target) {
        return mid;
    }
    else if (nums[mid] < target) {
        start = mid + 1;
        return bsHelper(nums, target, mid + 1, end);
    } else {
        end = mid - 1;
        return bsHelper(nums, target, start, mid - 1);
    }

}

/**
 * Detect capital letter in a string
 * @param {*} str 
 * @param {*} index 
 * @param {*} length 
 * @returns 
 */
const detectFirstUpperLetter = (str, index, length) => {
    if (index > length) {
        return false;
    }
    let charVal = str.charCodeAt(index);
    if (charVal >= 65 && charVal < 91) {
        return true;
    }
    return detectFirstUpperLetter(str, index + 1, length);
}
const findLenth = (str) => {
    if (str == "") return 0;
    return 1 + findLenth(str.substring(1));
}

const bubbleSort = (arr, n) => {
    //code here
    if (n < 0) return
    let index = n - 1;
    for (let i = index - 1; i >= 0; i--) {
        if (arr[i] > arr[index]) {
            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
    bubbleSort(arr, n - 1);
}
let str = "geeksforgeeks"


console.log(findLenth(str));