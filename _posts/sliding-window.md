---
title: "Sliding Window Algorithm"
excerpt: "Sliding Window problems involve traversing through a data structure (like an array or string) using a range (or window)  of either fixed or variable size. This method efficiently addresses challenges requiring continuous subsets of elements, such as identifying subarrays or substrings that meet specific criteria."
coverImage: "/assets/blog-assets/main_covers/sliding-window.jpg"
date: "2024-07-22T05:35:07.322Z"
author:
  name: "Jackson Ogles"
  picture: "/me.jpeg"
ogImage:
  url: "/assets/blog-assets/main_covers/sliding-window.jpg"
# deploy: "https://angular-homes-six.vercel.app/"
# github: "https://github.com/cjogles/angular-homes"
---

I had an interview last month where the interviewer asked me to solve a problem. I took WAY TOO long to solve it. And the interviewer was kind enough to guide me through a few key points to improve the efficiency of my eventual answer. So I'd like to take the time to explain the problem in detail and how one could solve it, in an effort to increase my knowledge and share interview experience. One of the best ways to solve it is by using the Sliding Window Algorithm. You'll see below that we can solve this problem using O(N) time instead of O(N) squared time.

Here is the problem:

Given an array of N numbers, and integer K, find the max sum in the array, where each sum is calculated from each K length continuous sub-arrays within the parent array. 

The data structure we're working with is an Array. Check. We can also assume that the variable K will be equal to or less than the length of the array.

I initially solved this problem in my interview by traversing the array, and iterating over each sub set, calculating it's sum, and saving that in another "answer array". Afterwards, I traversed over the "answer array" and returned the max sum. That solution has a time complexity of O(N) squared, since I needed to iterate N times initially, and then iterate again N divided by K times, which if we're rounding things is basically N squared big O.

Is there a better way? Yes. I can use the sliding window technique to iterate N times ONE TIME by calculating the sum for each K sized sub array in place, and slide the window (left and right pointers, range equaling the size K) and calucate that sum, and if it's larger, replace the sum variable I've saved by that. Returning the solution should take O(N) time. 

So in other words, we solved this problem using a "fixed window" version of the sliding window algorithm. Like so:

- Found the size of the window required, it was K.
- Computed the result for 1st window, i.e. included the first K elements of the data structure (the array in this case).
- Then we used a loop to slide the window by 1 and kept computing the result window by window.


