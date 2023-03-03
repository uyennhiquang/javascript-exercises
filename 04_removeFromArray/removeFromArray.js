const removeFromArray = function (array, ...elementsToPop) {
  // Ex: [1, 2, 3, 4, 3] => [1, 2, 4]
  const resultArr = [];
  // If the current element is inside the elementToPop array
  // then splice

  // Bug with this for loop iteration: Array length changes
  // so index also changes
  /* for (let i = 0; i < array.length; i++) {
    if (elementsToPop.includes(array[i])) {
      array.splice(i, 1);
      console.log(array.length);
    }
  } */
  for (let i = 0; i < array.length; i++) {
    if (!elementsToPop.includes(array[i])) resultArr.push(array[i]);
  }
  return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
