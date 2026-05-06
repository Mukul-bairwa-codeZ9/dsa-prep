# 🧩 LeetCode 1 - Two Sum

## 🟢 Difficulty: Easy

---

## 📌 Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that:

nums[i] + nums[j] = target

---

## 💡 Approach

Use HashMap:
- Store value → index
- Check if complement exists

---

## 🚀 Solution

```js
var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
};