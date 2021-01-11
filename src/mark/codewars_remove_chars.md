---
title: Code Wars
author: Brandon Czaja
date: 1/11/2021
---

Hello and welcome.

Today I want to discuss the Code Wars challenge Remove First and Last Characters. I will solve it using three JavaScript methods - slice(), substring(), and substr().

## Challenge

The challenge is pretty straight forward; you are given a string as a parameter and you have to return the string without the first and last characters.

## Slice()

- ### Definition

The definition for `string.slice()` given by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank">MDN</a> states:

The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

As the definition states, `slice()` creates a modified copy of the original string, without altering the original.

- ### Syntax

`string.slice(beginningIndex, endIndex)`

The `string.slice(beginningIndex, #)` is the zero-based index where the extraction point is initiated. If the index is negative, ex: `string.slice(-3, #)`, the extraction point is taken from the end of the string: `string.slice(-3) == string.length - 3`. If `beginningIndex` is greater than or equal to `string.length` an empty string is returned.

The `string.slice(#, endIndex)` is the zero-based index before the ending extraction point, meaning the `endIndex` will NOT be included in the extraction. If it is omitted, undefined, or greater than `string.length`, `slice()` will extract to the end of the string. Just like `beginningIndex`, if the `endIndex` is negative the extraction point as `string.length - endIndex`.

If the `beginningIndex` is negative then the `endIndex` must also be negative AND `endIndex` must be `>` `beginningIndex`, otherwise `slice()` will return an empty string.

- ### Solution

We are given `str` as the parameter. We want to create and return a modified version `str` so we will set it to itself and add the `.slice()` method to it: `str = str.slice()`.

Since we want to remove the first character we want the extraction point to start at the `1` index: `str.slice(1, #)`. This will remove the `0` index character from the string.

Next, we want to remove the last character in the string. Since we don't know what index number the string ends with, we can use `str.length-1` to get the last index. So now our `slice()` method looks like this: `str.slice(1, string.length-1)`. Note: We could also write it as `str.slice(1, -1)` because `-1` is subtracted from the end of the string.

All that is left to do is return the string: `return str`

Solution:

```javascript
function removeChar(str) {
  str = str.slice(1, str.length - 1)
  return str
}
```

## Substring()

Brandon
