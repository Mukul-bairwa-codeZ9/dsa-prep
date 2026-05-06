# 🧩 LeetCode 242 - Valid Anagram

## 🟢 Difficulty: Easy

---

## 📌 Problem

Given two strings `s` and `t`, return true if `t` is an anagram of `s`.

---

## 💡 Approach

Use Frequency Count (HashMap):
- Count characters in `s`
- Subtract using `t`
- If mismatch → false

---

## 🚀 Solution

```js
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
};


```markdown
## ⚡ Complexity

- Time: O(n)
- Space: O(n)