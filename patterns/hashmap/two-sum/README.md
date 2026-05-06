# 🔢 Two Sum

## 🧠 Pattern
HashMap (Lookup Optimization)

---

## 📌 Problem Idea

Find two numbers such that:
- nums[i] + nums[j] = target

---

## 💡 Approach

- Iterate through array
- Store number in map
- Check if (target - current) exists

---

## 🚀 Solution (JavaScript)

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