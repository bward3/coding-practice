/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  for (i = 0; i < prices.length; i++) {
    let x = prices[i];
    for (j = i + 1; j < prices.length; j++) {
      let y = prices[j];
      if (-x + y > max) {
        max = -x + y;
      }
    }
  }
  return max;
};
