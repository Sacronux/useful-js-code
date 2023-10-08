/**
 * @param {number} num
 * @return {string}
 */

const dictionary = {
    '1': 'I',
    '5': 'V',
    '10': 'X',
    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M',
  };

var intToRoman = function (num) {
  

  const str = num.toString().split('');
  const length = str.length;
  let result = ''

  for (let i = 0; i < length; i++) {
    const size = length - i - 1;
    const startValue = str[i];
    const zeros = '0'.repeat(size)
    const valueStr = startValue + zeros

    if (dictionary[valueStr]) {
        result += dictionary[valueStr]
    } else {
        if (Number(startValue) === 4) {
            const closest = dictionary['5' + zeros];
            const pref = dictionary['1' + zeros];
            result += pref + closest;
        } else if (Number(startValue) === 9) {
            const closest = dictionary['1' + zeros + '0'];
            const pref = dictionary['1' + zeros];
            result += pref + closest;
        } else if (Number(startValue) > 5) {
            const pref = dictionary[5 + zeros];
            const suf = dictionary[`1${zeros}`].repeat(Number(startValue) - 5)
            result += pref + suf
        } else {
            const key = dictionary[`1${zeros}`]
            result += key.repeat(Number(startValue))
        }
    }
  }
  return result
};

intToRoman(58)
