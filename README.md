# Coding Challenge Tests
This is a coding challenge I put together to help folks in search of jobs


### Binary Search
`blsearch.js`

Binary search works way faster than linear search, the only caveat is the fact that the array must be sorted. I’ll explain how binary search works.

Let’s say we have an array of 1 to 10, binary search gets the total number of elements in the array and divides it to get the average. If the search key is greater than the average, the search will start from the next number after the average while the end remains the total number of the array.

If the search key is less than the middle average, we set the total number of arrays to a number less than the average.
We then recursively check each of the remaining results to get our target element.

It's flexible and takes less time to achieve a result.
