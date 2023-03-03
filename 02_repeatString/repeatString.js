const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  else {
    const resultString = [];

    for (let i = 0; i < num; i++) {
      resultString.push(string);
    }
    return resultString.join("");
  }
};

// Do not edit below this line
module.exports = repeatString;
