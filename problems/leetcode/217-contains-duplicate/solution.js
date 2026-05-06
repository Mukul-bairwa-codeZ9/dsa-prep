/**
 * LeetCode 217 - Contains Duplicate
 */

/* ✅ HashSet */
var containsDuplicate = function(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
};

/* 🚫 Sorting */
var containsDuplicateSorting = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }

    return false;
};