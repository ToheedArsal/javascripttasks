// throw is used for the custom error messgaes
function checkInteger(input) {
  if (Number.isInteger(input)) {
    console.log(input + " is a integer");
  } else {
    throw "The number is not a integer";
  }
}

try {
  checkInteger(10);
} catch (error) {
  console.log("Error :", error);
}
