// throw is used for the custom error messgaes
function checkNumber(number) {
  if (number < 0) {
    throw "The number is negative";
  }
}

try {
  checkNumber(-10);
} catch (error) {
  console.log("Error :", error);
}
