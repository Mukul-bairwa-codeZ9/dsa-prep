/**
 * Contains Duplicate - All Approaches
 */

/* ✅ HashSet (Best for unsorted) */
var containsDuplicate = function(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
};

/* 🚫 Sorting (No extra space) */
var containsDuplicateSorting = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }

    return false;
};

/* ⚡ Sorted array case */
var containsDuplicateSorted = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }
    return false;
};

/* ❌ Brute force */
var containsDuplicateBrute = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
};