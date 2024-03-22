function checkString(str) {
  if (str.length == 0) {
    throw "Error : String Is Empty";
  } else {
    console.log("String Is :", str);
  }
}

let str = "";

try {
  checkString(str);
} catch (error) {
  console.log(error);
}
