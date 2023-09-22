var hIndex = function(citations) {
    citations.sort((a, b) => b - a)

    if (citations.length === 1) {
      if (citations[0] === 0) {
        return 0
      }
      return 1
    }

    let biggest = 0
    for (let i = 0; i < citations.length; i++) {
      if (i + 1 <= citations[i]) {
        biggest += 1
      }
    }
    return biggest
};

const citations = [3,0,6,1,5]
console.log(hIndex(citations))