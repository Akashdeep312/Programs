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

search([-1, 0, 3, 5, 9, 12], 2);