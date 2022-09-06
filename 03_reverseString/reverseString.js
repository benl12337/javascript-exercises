const reverseString = function(string) {
  let buffer = '';
  let sLength = string.length;
  for (let i = sLength - 1; i >= 0; i--) {
    buffer = buffer + string[i];
  }
  return buffer;
};

// Do not edit below this line
module.exports = reverseString;
