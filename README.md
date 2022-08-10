# Blind 75 Practice

## 2-sum

<code>Input: (nums, target) where nums is an array of integers and target is the target sum </code>

<code> Output: [i,j] where i and j are the indeces of the solution relative to the nums array </code>

#### Solution

We need to check all possible combinations of two numbers to exhaust all possibilities, so I chose a double pointer approach. The outer loop keeps track of the first index `i`, and the inner loop keeps track of the second index, `j`. We don't need to check numbers we've already looked at, so the inner loop index `j` will begin at `i+1`, where `i` simply starts at 0 and loops through the entire input array. If we find `i` and `j` where `nums[1]+nums[j] = target` we return `[i,j]`. If both loops finish without finding a solution, return -1.