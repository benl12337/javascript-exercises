const removeFromArray = function() {
  inputArray = arguments[0];
  let arrayLength = inputArray.length;

  removeArray = [];
  for (let i = 1; i < arguments.length; i++) {
    removeArray.push(arguments[i]);
  }
  

  newArray = [];
  for (let j = 0; j < arrayLength; j++) {
    if (removeArray.includes(inputArray[j])) {
      continue;
    } else {
      newArray.push(inputArray[j]);
    }
  }


  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
