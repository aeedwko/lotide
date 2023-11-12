const flatten = function(arr) {
  const flattenedArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    } else {
      flattenedArr.push(arr[i]);
    }
  }

  return flattenedArr;
};

module.exports = flatten;