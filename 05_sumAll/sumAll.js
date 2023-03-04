const sumAll = function (a, b) {
  if (typeof a !== "number" || a < 0 || typeof b !== "number" || b < 0)
    return "ERROR";
  else {
    if (a > b) return (a * (a + 1)) / 2 - (b * (b - 1)) / 2;
    else return (b * (b + 1)) / 2 - (a * (a - 1)) / 2;
  }
};

// Do not edit below this line
module.exports = sumAll;
