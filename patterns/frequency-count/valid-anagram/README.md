# 🔤 Valid Anagram

## 🧠 Pattern
Frequency Count

---

## 📌 Definition

An anagram is when two strings:
- Have same characters
- Same frequency
- Order does not matter

---

## 💡 Approach

- Count characters in string `s`
- Subtract using string `t`
- If all values become 0 → anagram

---

## 🚀 Solution (JavaScript)

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