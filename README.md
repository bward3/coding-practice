# Blind 75 Practice

## 2-sum

<code>Input: (nums, target) where nums is an array of integers and target is the target sum </code>

<code>Output: [i,j] where i and j are the indeces of the solution relative to the nums array </code>

### Solution

We need to check all possible combinations of two numbers to exhaust all possibilities, so I chose a double pointer approach. The outer loop keeps track of the first index `i`, and the inner loop keeps track of the second index, `j`. We don't need to check numbers we've already looked at, so the inner loop index `j` will begin at `i+1`, where `i` simply starts at 0 and loops through the entire input array. If we find `i` and `j` where `nums[i]+nums[j] = target` we return `[i,j]`. If both loops finish without finding a solution, return empty array. This algorithm is O(n<sup>2</sup>)

## Max profit

<code>Input: array prices where prices[i] is the price of a given stock on the i<sup>th</sup> day.</code>

<code>Output: the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. (Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.)</code>

### Solution

Like the first solution to the two sum problem, we will take a double pointer approach. Because we cannot sell a stock before we buy it, we know the second pointer must start after the first. `prices[i]` will be the prices we buy a stock at, and `prices[j]` will be the prices we can sell that stock at. In my solution I check whether `-x + y` is greater than the maximum profit so far (`y - x` is an equivalent statement, but I find that visualizing the "buy" cost as a negative value is helpful in understanding the problem). After both outer and inner loops are exhausted, the final value of our `max` will be the greatest profit possible. If `max` is less than 0, our algorithm will simply return 0.

## Contains duplicate

<code>Input: array of integers, nums</code>

<code>Output: true if any value appears at least twice in nums array, false if every element is distinct</code>

### Solution

I provide two solutions here. The first is very close to the previous two problems' solutions, however the complexity will be O(n<sup>2</sup>) with both loops running the length of the array.

The second solution we can use a set to improve complexity to O(n). By definition a set contains no duplicates, and is created in O(n) time. The nice thing about this solution is that we don't actually have to make any comparisons between any individual elements, we simply compare the length of the initial array with the size of the new set we have created. If the length is equal to the size, we know there are no duplicates per restraints of a set. If the set is shorter, we know that the inital array contains at least one duplicate. Also who doesn't love a one-liner?
