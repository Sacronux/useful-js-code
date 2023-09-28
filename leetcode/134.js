/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// Pathetic
var canCompleteCircuit1 = function(gas, cost) {
    let startPoint = null;
    let gasAmount1 = 0;
    let gasAmount2 = 0;
  
    for (let i = 0; i < gas.length; i++) {
      if (startPoint === null) {
        if (gas[i] >= cost[i]) {
          startPoint = i
          gasAmount2 += gas[i] - cost[i]
        } else {
          gasAmount1 += gas[i] - cost[i]
        }
      } else {
        const gasLeft = gasAmount2 + gas[i] - cost[i]
        if (gasLeft < 0) {
          startPoint = null
          gasAmount1 += gasLeft
          gasAmount2 = 0;
        } else {
          gasAmount2 += gas[i] - cost[i]
        }
      }
    }
    if (startPoint === null) {
      return -1
    }
    if (gasAmount2 + gasAmount1 >= 0) {
      return startPoint
    } else {
      return -1
    }
  };

var canCompleteCircuit = function(gas, cost) {
    let totalTank = 0;
    let curTank = 0;
    let pos = 0;
    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i]
        curTank += gas[i] - cost[i]
        if (curTank < 0) {
            curTank = 0
            pos += 1
        }
    }
    return curTank < 0 ? -1 : pos
}

  
  const gas = [3,3,4]
  const cost = [3,4,4]
  
  console.log(canCompleteCircuit(gas, cost))