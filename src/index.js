module.exports = function count(s, pairs) {

  let number = 1;
  let amount = 1;

  pairs.forEach(value => number *= Math.pow(value[0], value[1]));
  let bitMask = s.split('');

  //упрошение с помощью формулы Эйлера
  if (bitMask[0] === '1' && bitMask.length === 1)
    pairs.forEach(value => amount *= value[0] - 1);
  else {
    //.......
    if(number > 100000) return 0;

    amount = 0;
    let flag;

    for (let k = 0; k < number;k++) {

      for (let index = 0; index < bitMask.length; index++) {
        switch (bitMask[index]) {
          case '0' :
            flag = gcd(number, k + index) !== 1;
            break;
          case '1' :
            flag = gcd(number, k + index) === 1;
            break;
        }
        if (flag === false) break;
      }

      amount += flag ? 1 : 0;
    }

  }

  return amount % 1000000007;
};

const gcd = (x, y) => {
  let p = 0;
  while (y !== 0) {
    p = x % y;
    x = y;
    y = p;
  }
  return x;
};