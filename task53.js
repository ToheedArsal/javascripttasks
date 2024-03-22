function checkIfArrayIsEmpty(arr) {
  if (arr.length == 0) {
    throw "Array Is Empty";
  } else {
    console.log(arr);
  }
}

const arr = [];
try {
  checkIfArrayIsEmpty(arr);
} catch (error) {
  console.log("Error : ", error);
}
