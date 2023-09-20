var maxProfit1 = function(prices) {
    let sellCandidateIdx = 0;
    let buyDayIdx = 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
      console.log({ i, buyDayIdx, buy: prices[buyDayIdx], sell: prices[sellCandidateIdx], sellCandidateIdx, profit })

      if (prices[sellCandidateIdx] < prices[i]) {
        console.log(1)
        sellCandidateIdx = i
      }

      if (prices[i] < prices[sellCandidateIdx]) {
        console.log(3)
        profit += prices[sellCandidateIdx] - prices[buyDayIdx];
        buyDayIdx = i
        sellCandidateIdx = i
      }

      if (i === prices.length - 1) {
        profit += prices[sellCandidateIdx] - prices[buyDayIdx];
      }
    }
    console.log({ sellCandidateIdx, buyDayIdx })
    return profit
};

const maxProfit2 = (prices) => {
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
}

const prices = [7,1,5,3,6,4];

console.log(maxProfit2(prices))