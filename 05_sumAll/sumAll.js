const sumAll = function(min, max) {
  let sum = 0;

  if (min < 0 || max < 0) {
    return 'ERROR';
  }

  if (typeof(max) != 'number' || typeof(min) != 'number') {
    return 'ERROR';
  }

  if (max < min) {
    let tmp = min;
    min = max;
    max = tmp;
  }

  for (let i = min; i <= max; i++) {
  sum += i;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
