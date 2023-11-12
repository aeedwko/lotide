const without = function(source, itemsToRemove) {
  let subset = [];
  let isRemovable = false;

  for (let i = 0; i < source.length; i++) {
    isRemovable = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isRemovable = true;
        break;
      }
    }
    if (!isRemovable) {
      subset.push(source[i]);
    }
  }

  return subset;
};

module.exports = without;