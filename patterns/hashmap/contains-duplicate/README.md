# 🔁 Contains Duplicate

## 🧠 Pattern
HashSet / Sorting / Linear Scan

---

## 📌 Problem Idea

Check if any element appears more than once in an array.

---

## 💡 Approaches

### ✅ 1. HashSet (Unsorted - Optimal ⭐)
- Store elements in a Set
- If element already exists → duplicate

---

### 🚫 2. Sorting (No Extra Space)
- Sort array
- Compare adjacent elements

---

### ⚡ 3. Sorted Array Optimization
- If array is already sorted
- Just check neighbors

---

### ❌ 4. Brute Force
- Compare every pair

---

## 🚀 Solutions

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