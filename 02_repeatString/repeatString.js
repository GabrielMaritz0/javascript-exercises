const repeatString = function (str, num) {
  let final = "";
  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    final += str;
  }
  return final;
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
