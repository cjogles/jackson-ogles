---
title: "Merge Sorted Array"
excerpt: "This leetcode problem asks me to merge two non-decreasing arrays into one sorted non-decreasing array. Post contains the problem description, link to leetcode, and my answer that fulfills each test case. Notice any improvements I can make? Use the contact tab to reach out! 😊"
coverImage: "/assets/blog-assets/main_covers/leetcode.jpg"
date: "2024-10-09T05:35:07.322Z"
author:
  name: "Jackson Ogles"
  picture: "/me.jpeg"
ogImage:
  url: "/assets/blog-assets/main_covers/leetcode.jpg"
# deploy: "https://angular-homes-six.vercel.app/"
# github: "https://github.com/cjogles/angular-homes"
---


See description of problem, and my answer here! Let me know what you think
using my contact page 😊
  
Do not return anything, modify nums1 in-place instead.
  
Problem found online here -> https://leetcode.com/studyplan/top-interview-150/
  
Problem defined: 
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-10^9 <= nums1[i], nums2[j] <= 10^9

CODE ANSWER BELOW IN JAVASCRIPT

```
/**
  @param {number[]} nums1
  @param {number} m
  @param {number[]} nums2
  @param {number} n
  @return {void} Do not return anything, modify nums1 in-place instead.
*/

// HELPER FUNCTION for merge()
var nAmountOfZeros = function(n, nums1) {
  let counter = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      counter++
    }
  }
  if (counter === n) {
    return true
  } else {
    return false
  }
}

// where the magic happens
var merge = function(nums1, m, nums2, n) {
  if (nums1.length === 0) {
      nums1 = [0]
  }
  if (nums2.length === 0) {
      nums2 = [0]
  }
  let j = 0
  let z = 0
  for (let i = 0; i <= m + n - 1; i++) {
      if (nums1[j] <= nums2[z]) {
          if (i !== nums1.length-1 && nums1[j+1] === 0 && nAmountOfZeros(n, nums1)) {
              nums1[j+1] = nums1[j]
              nums1[j] = nums2[z]
              j++
              z++
              continue
          } else if (nums1[j] === 0) {
              nums1[j] = nums2[z]
              j++
              z++
              continue
          }
          j++
          continue
      } else {
          if (nums2.length === 1 && nums2[z] === 0) {
            continue
          }
          if (i !== nums1.length-1 && nums1[j+1] === 0 && nAmountOfZeros(n, nums1)) {
            nums1[j+1] = nums1[j]
            nums1[j] = nums2[z]
          }
          nums1[j] = nums2[z]
          j++
          z++
          continue
      }

  }
  return nums1
};

// ensure test cases work
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))
```