# 🧩 LeetCode 217 - Contains Duplicate

## 🟢 Difficulty: Easy

---

## 📌 Problem

Given an array `nums`, return true if any value appears at least twice.

---

## 💡 Approaches

1. HashSet (Optimal)
2. Sorting (No extra space)
3. Sorted array scan
4. Brute force

---

## 🚀 Solution

### 🔹 HashSet
```js
var containsDuplicate = function(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
};



var containsDuplicateSorting = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }

    return false;
};

var containsDuplicateSorted = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }
    return false;
};