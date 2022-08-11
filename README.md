# Blind 75 Practice

## 2-sum

<code>Input: (nums, target) where nums is an array of integers and target is the target sum </code>

<code> Output: [i,j] where i and j are the indeces of the solution relative to the nums array </code>

### Solution

We need to check all possible combinations of two numbers to exhaust all possibilities, so I chose a double pointer approach. The outer loop keeps track of the first index `i`, and the inner loop keeps track of the second index, `j`. We don't need to check numbers we've already looked at, so the inner loop index `j` will begin at `i+1`, where `i` simply starts at 0 and loops through the entire input array. If we find `i` and `j` where `nums[i]+nums[j] = target` we return `[i,j]`. If both loops finish without finding a solution, return -1.

## Max profit

<code>Input: array prices where prices[i] is the price of a given stock on the i<sup>th</sup> day.</code>

<code>Output: the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. (Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.)</code>

### Solution

Like the two sum problem, we will take a double pointer approach. Because we cannot sell a stock before we buy it, we know the second pointer must start after the first. `prices[i]` will be the prices we buy a stock at, and `prices[j]` will be the prices we can sell that stock at. In my solution I check whether `-x + y` is greater than the maximum profit so far (`y - x` is an equivalent statement, but I find that visualizing the "buy" cost as a negative value is helpful in understanding the problem). After both outer and inner loops are exhausted, the final value of our `max` will be the greatest profit possible. If `max` is less than 0, our algorithm will simply return 0.
